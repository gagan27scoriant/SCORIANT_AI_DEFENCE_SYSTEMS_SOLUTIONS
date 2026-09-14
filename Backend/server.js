require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const multer = require('multer');

const app = express();
const PORT = process.env.PORT || 8787;
const RECEIVER_EMAIL = process.env.RECEIVER_EMAIL || process.env.CONTACT_TO_EMAIL || 'info@scoriant.com';
const CC_EMAIL = process.env.CC_EMAIL || 'gagan@scoriant.com';

// Multer in-memory storage for file uploads
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB limit
});

// Middleware - allow frontend dev and configured production origin
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'http://127.0.0.1:5173',
  'https://scoriant.com',
  ...(process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',').map(s => s.trim()) : [])
];

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin) || allowedOrigins.includes('*')) {
      callback(null, true);
    } else {
      callback(null, true); // Permissive in dev to avoid CORS blocking
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Helper: Validate email address format strictly
function isValidEmail(email) {
  if (!email || typeof email !== 'string') return false;
  const trimmed = email.trim();
  if (trimmed.length < 5 || trimmed.length > 254) return false;
  // RFC 5322 compliant regex for standard email addresses
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
  return emailRegex.test(trimmed);
}

// Helper: Create Nodemailer Transporter
function getTransporter() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });
}

// Reusable HTML Email Template Generator
function generateEmailHtml({ title, badge, fields, message }) {
  const fieldRows = Object.entries(fields)
    .filter(([_, val]) => val && String(val).trim().length > 0)
    .map(
      ([key, val]) => `
      <tr>
        <td style="padding: 10px 14px; font-weight: 700; color: #475569; width: 35%; border-bottom: 1px solid #e2e8f0; font-size: 14px;">${key}</td>
        <td style="padding: 10px 14px; color: #0f172a; border-bottom: 1px solid #e2e8f0; font-size: 14px;">${String(val).replace(/\n/g, '<br>')}</td>
      </tr>
    `
    )
    .join('');

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f1f5f9; margin: 0; padding: 24px; color: #0f172a; }
        .container { max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 10px 30px rgba(0,0,0,0.06); }
        .header { background: #0b0f19; padding: 30px 28px; color: #ffffff; text-align: left; }
        .badge { display: inline-block; background: rgba(124, 58, 237, 0.25); border: 1px solid #a78bfa; color: #c084fc; font-size: 11px; font-weight: 800; letter-spacing: 1.2px; text-transform: uppercase; padding: 4px 12px; border-radius: 9999px; margin-bottom: 10px; }
        .title { font-size: 22px; font-weight: 800; margin: 0; color: #ffffff; }
        .content { padding: 28px; }
        .table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
        .message-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 18px; margin-top: 10px; }
        .footer { padding: 20px 28px; background: #f8fafc; border-top: 1px solid #e2e8f0; text-align: center; font-size: 12px; color: #64748b; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="badge">${badge}</div>
          <h1 class="title">${title}</h1>
          <p style="margin: 6px 0 0 0; font-size: 13px; color: #94a3b8;">Scoriant AI Defence Systems Solutions Portal</p>
        </div>
        <div class="content">
          <table class="table">
            ${fieldRows}
          </table>
          ${
            message
              ? `
            <div style="font-weight: 700; font-size: 14px; color: #0f172a; margin-top: 16px;">Message / Additional Details:</div>
            <div class="message-box">
              <p style="margin: 0; font-size: 14px; color: #334155; line-height: 1.6; white-space: pre-line;">${message}</p>
            </div>
          `
              : ''
          }
        </div>
        <div class="footer">
          Received via Scoriant Online Portal • Destination: ${RECEIVER_EMAIL} • CC: ${CC_EMAIL}
        </div>
      </div>
    </body>
    </html>
  `;
}

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    service: 'Scoriant AI Defence Backend',
    timestamp: new Date().toISOString(),
    receiverEmail: RECEIVER_EMAIL,
    ccEmail: CC_EMAIL,
    smtpConfigured: Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS),
  });
});

// 1. Contact Form Submission (Validated sender email + CC to gagan@scoriant.com)
app.post('/api/contact', async (req, res) => {
  try {
    const { name, companyName, email, phone, productOfInterest, message } = req.body;

    if (!name || typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({ error: 'Sender full name is required.' });
    }

    if (!email || !isValidEmail(email)) {
      return res.status(400).json({ error: 'Please enter a valid sender email address.' });
    }

    const trimmedEmail = email.trim();
    const trimmedName = name.trim();

    const transporter = getTransporter();
    const fromAddress = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER || 'info@scoriant.com';
    const fromName = process.env.SMTP_FROM_NAME || 'Scoriant Portal';

    const mailOptions = {
      from: `"${fromName}" <${fromAddress}>`,
      to: RECEIVER_EMAIL,
      cc: CC_EMAIL,
      replyTo: trimmedEmail,
      subject: `[Scoriant Inquiry] ${productOfInterest || 'General Consultation'} - ${trimmedName}`,
      html: generateEmailHtml({
        title: 'New Client Inquiry Received',
        badge: 'CONTACT & INQUIRY',
        fields: {
          'Full Name': trimmedName,
          'Company / Organization': companyName || 'N/A',
          'Sender Email Address': trimmedEmail,
          'Phone Number': phone || 'N/A',
          'Product of Interest': productOfInterest || 'General Inquiry',
        },
        message,
      }),
    };

    if (transporter) {
      await transporter.sendMail(mailOptions);
      console.log(`[CONTACT] Email dispatched successfully to ${RECEIVER_EMAIL} (CC: ${CC_EMAIL}) from ${trimmedEmail}`);
    } else {
      console.warn(`[CONTACT] SMTP credentials not set in .env. Logging submission to console:`, req.body);
    }

    return res.status(200).json({
      success: true,
      message: `Your inquiry has been received and forwarded to ${RECEIVER_EMAIL} and ${CC_EMAIL}.`,
    });
  } catch (error) {
    console.error('[CONTACT_ERROR]', error);
    return res.status(500).json({
      error: 'Failed to process inquiry.',
      details: error.message,
    });
  }
});

// 2. Career & Job Application Submission (Validated sender email + Resume attached + CC to gagan@scoriant.com)
app.post('/api/careers', upload.single('resume'), async (req, res) => {
  try {
    const {
      name,
      phone,
      email,
      jobRole,
      educationQualification,
      expectedSalary,
      city,
      state,
      country,
      linkedinUrl,
      message,
    } = req.body;

    if (!name || typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({ error: 'Candidate name is required.' });
    }

    if (!email || !isValidEmail(email)) {
      return res.status(400).json({ error: 'Please enter a valid candidate email address to submit your resume.' });
    }

    const trimmedEmail = email.trim();
    const trimmedName = name.trim();

    const transporter = getTransporter();
    const attachments = [];

    // Attach resume file directly to email sent to info@scoriant.com and CC
    if (req.file) {
      attachments.push({
        filename: req.file.originalname,
        content: req.file.buffer,
        contentType: req.file.mimetype,
      });
      console.log(`[CAREERS] Resume attached: ${req.file.originalname} (${req.file.size} bytes) for candidate ${trimmedName}`);
    }

    const fromAddress = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER || 'info@scoriant.com';
    const fromName = process.env.SMTP_FROM_NAME || 'Scoriant Careers Portal';

    const mailOptions = {
      from: `"${fromName}" <${fromAddress}>`,
      to: RECEIVER_EMAIL, // info@scoriant.com
      cc: CC_EMAIL,        // gagan@scoriant.com
      replyTo: trimmedEmail,
      subject: `[Career Application] ${jobRole || 'Engineering Role'} - ${trimmedName}${req.file ? ' (Resume Attached)' : ''}`,
      html: generateEmailHtml({
        title: 'New Job Application & Resume Received',
        badge: 'CAREERS & TALENT',
        fields: {
          'Candidate Name': trimmedName,
          'Applied Position': jobRole || 'Open Position',
          'Candidate Email': trimmedEmail,
          'Phone Number': phone || 'N/A',
          'Education Qualification': educationQualification || 'N/A',
          'Expected Salary': expectedSalary || 'N/A',
          'Location': [city, state, country].filter(Boolean).join(', ') || 'N/A',
          'LinkedIn Profile': linkedinUrl ? `<a href="${linkedinUrl}" target="_blank">${linkedinUrl}</a>` : 'N/A',
          'Resume File': req.file ? `📎 Attached (${req.file.originalname})` : 'No file attached',
        },
        message,
      }),
      attachments,
    };

    if (transporter) {
      await transporter.sendMail(mailOptions);
      console.log(`[CAREERS] Application & resume dispatched successfully to ${RECEIVER_EMAIL} (CC: ${CC_EMAIL}) for ${jobRole} from ${trimmedEmail}`);
    } else {
      console.warn(`[CAREERS] SMTP credentials not set in .env. Logging submission to console:`, req.body);
    }

    return res.status(200).json({
      success: true,
      message: `Your application and resume have been received and forwarded to ${RECEIVER_EMAIL} and ${CC_EMAIL}.`,
    });
  } catch (error) {
    console.error('[CAREERS_ERROR]', error);
    return res.status(500).json({
      error: 'Failed to process application.',
      details: error.message,
    });
  }
});

// 3. Product Demo Request Submission (Validated sender email + CC to gagan@scoriant.com)
app.post('/api/demo', async (req, res) => {
  try {
    const { name, email, organization, interest, message } = req.body;

    if (!name || typeof name !== 'string' || !name.trim()) {
      return res.status(400).json({ error: 'Requester name is required.' });
    }

    if (!email || !isValidEmail(email)) {
      return res.status(400).json({ error: 'Please enter a valid official/work email address.' });
    }

    const trimmedEmail = email.trim();
    const trimmedName = name.trim();

    const transporter = getTransporter();
    const fromAddress = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER || 'info@scoriant.com';
    const fromName = process.env.SMTP_FROM_NAME || 'Scoriant Demo Portal';

    const mailOptions = {
      from: `"${fromName}" <${fromAddress}>`,
      to: RECEIVER_EMAIL,
      cc: CC_EMAIL,
      replyTo: trimmedEmail,
      subject: `[Demo Request] ${interest || 'Product Briefing'} - ${trimmedName}`,
      html: generateEmailHtml({
        title: 'New Live Demo Request Received',
        badge: 'DEFENCE DEMO & BRIEFING',
        fields: {
          'Full Name': trimmedName,
          'Organization / Defence Agency': organization || 'N/A',
          'Official Email': trimmedEmail,
          'Solution of Interest': interest || 'Defence Systems',
        },
        message,
      }),
    };

    if (transporter) {
      await transporter.sendMail(mailOptions);
      console.log(`[DEMO] Request dispatched successfully to ${RECEIVER_EMAIL} (CC: ${CC_EMAIL}) from ${trimmedEmail}`);
    } else {
      console.warn(`[DEMO] SMTP credentials not set in .env. Logging submission to console:`, req.body);
    }

    return res.status(200).json({
      success: true,
      message: `Your demo request has been received and forwarded to ${RECEIVER_EMAIL} and ${CC_EMAIL}.`,
    });
  } catch (error) {
    console.error('[DEMO_ERROR]', error);
    return res.status(500).json({
      error: 'Failed to process demo request.',
      details: error.message,
    });
  }
});

// Start Server (when run locally or in persistent container)
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`=========================================`);
    console.log(` Scoriant Backend API running on port ${PORT}`);
    console.log(` Primary Target: ${RECEIVER_EMAIL}`);
    console.log(` Carbon Copy (CC): ${CC_EMAIL}`);
    console.log(` Health Check: http://localhost:${PORT}/api/health`);
    console.log(`=========================================`);
  });
}

module.exports = app;



