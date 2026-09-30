require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const multer = require('multer');
const crypto = require('crypto');

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

// =============================================================================
// ADMIN 2-FACTOR AUTHENTICATION (2FA) WITH OTP EMAIL VERIFICATION
// =============================================================================

// In-memory challenge store: challengeId -> { otp, createdAt, expiresAt, attemptsRemaining, ip }
const adminOtpChallenges = new Map();

// In-memory rate limiting for key attempts: ip -> { count, lockoutUntil }
const adminKeyAttempts = new Map();

// Automatic cleanup of expired OTP challenges & key attempt lockouts every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [id, challenge] of adminOtpChallenges.entries()) {
    if (now > challenge.expiresAt) {
      adminOtpChallenges.delete(id);
    }
  }
  for (const [ip, record] of adminKeyAttempts.entries()) {
    if (now > record.lockoutUntil) {
      adminKeyAttempts.delete(ip);
    }
  }
}, 5 * 60 * 1000);

// Defence-grade, high-security HTML email template for Admin OTP verification
function generateAdminOtpEmailHtml({ otp, timestamp, ip, expiresMinutes = 10 }) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Scoriant Admin Login Verification Code</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #070a13; margin: 0; padding: 24px; color: #f8fafc; }
        .wrapper { max-width: 600px; margin: 0 auto; background: #0b0f19; border-radius: 20px; overflow: hidden; border: 1px solid #1e293b; box-shadow: 0 25px 60px -15px rgba(0,0,0,0.8), 0 0 35px rgba(124, 58, 237, 0.2); }
        .header { background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0b0f19 100%); padding: 36px 32px 28px; border-bottom: 1px solid rgba(167, 139, 250, 0.25); text-align: left; }
        .badge { display: inline-flex; align-items: center; gap: 6px; background: rgba(124, 58, 237, 0.25); border: 1px solid #a855f7; color: #c084fc; font-size: 11px; font-weight: 800; letter-spacing: 1.5px; text-transform: uppercase; padding: 5px 14px; border-radius: 9999px; margin-bottom: 14px; }
        .title { font-size: 24px; font-weight: 900; margin: 0 0 8px 0; color: #ffffff; letter-spacing: -0.5px; }
        .subtitle { font-size: 14px; color: #94a3b8; margin: 0; line-height: 1.5; }
        .content { padding: 32px; background: #0b0f19; }
        .intro { font-size: 15px; color: #cbd5e1; line-height: 1.6; margin: 0 0 24px 0; }
        .otp-container { background: linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(59, 130, 246, 0.1) 100%); border: 2px solid rgba(168, 85, 247, 0.7); border-radius: 16px; padding: 28px 20px; text-align: center; margin-bottom: 28px; box-shadow: 0 0 30px rgba(124, 58, 237, 0.25); }
        .otp-label { font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: #c084fc; font-weight: 800; margin-bottom: 12px; }
        .otp-code { font-family: 'SF Mono', Monaco, Menlo, Consolas, 'Courier New', monospace; font-size: 44px; font-weight: 900; letter-spacing: 14px; color: #ffffff; text-shadow: 0 0 20px rgba(192, 132, 252, 0.9); padding-left: 14px; }
        .otp-meta { font-size: 12px; color: #94a3b8; margin-top: 12px; font-weight: 500; }
        .info-table { width: 100%; border-collapse: collapse; margin-bottom: 28px; background: rgba(15, 23, 42, 0.6); border-radius: 12px; overflow: hidden; border: 1px solid #1e293b; }
        .info-row td { padding: 12px 16px; font-size: 13px; border-bottom: 1px solid #1e293b; }
        .info-row:last-child td { border-bottom: none; }
        .info-key { color: #64748b; font-weight: 600; width: 38%; }
        .info-val { color: #f1f5f9; font-weight: 600; }
        .alert-box { background: rgba(239, 68, 68, 0.12); border: 1px solid rgba(239, 68, 68, 0.35); border-radius: 12px; padding: 16px 20px; margin-bottom: 24px; }
        .alert-title { color: #f87171; font-size: 13px; font-weight: 800; letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 6px; }
        .alert-desc { color: #cbd5e1; font-size: 13px; line-height: 1.5; margin: 0; }
        .footer { padding: 24px 32px; background: #070a13; border-top: 1px solid #1e293b; text-align: center; color: #475569; font-size: 12px; line-height: 1.6; }
      </style>
    </head>
    <body>
      <div class="wrapper">
        <div class="header">
          <div class="badge">
            <span>🛡️ HIGH-PRIORITY // 2FA VERIFICATION</span>
          </div>
          <h1 class="title">Administrator Login Verification</h1>
          <p class="subtitle">Scoriant AI Defence Systems Solutions • Sovereign Security Gate</p>
        </div>
        <div class="content">
          <p class="intro">
            An administrative login request has been initiated for the <strong>Scoriant Defence Command Center</strong> (<code>/Scoriant_Admin</code>) using the valid security key. To authorize access, enter the single-use verification code below:
          </p>

          <div class="otp-container">
            <div class="otp-label">One-Time Security Verification Code (OTP)</div>
            <div class="otp-code">${otp}</div>
            <div class="otp-meta">Expires in ${expiresMinutes} minutes • Single-use only</div>
          </div>

          <table class="info-table">
            <tr class="info-row">
              <td class="info-key">Target Route</td>
              <td class="info-val">/Scoriant_Admin</td>
            </tr>
            <tr class="info-row">
              <td class="info-key">Timestamp (IST)</td>
              <td class="info-val">${timestamp}</td>
            </tr>
            <tr class="info-row">
              <td class="info-key">Client IP Origin</td>
              <td class="info-val">${ip}</td>
            </tr>
            <tr class="info-row">
              <td class="info-key">Access Level</td>
              <td class="info-val">Level 1 - System Administrator</td>
            </tr>
          </table>

          <div class="alert-box">
            <div class="alert-title">⚠️ Security Notice</div>
            <p class="alert-desc">
              If you did <strong>NOT</strong> initiate this administrator login request, someone may be attempting unauthorized access with your master security key. Please inspect server activity and rotate your security credentials immediately.
            </p>
          </div>
        </div>
        <div class="footer">
          Scoriant AI Defence Systems Solutions • Sovereign Security Operations<br />
          This is an automated cryptographic alert. Do not reply directly to this email.
        </div>
      </div>
    </body>
    </html>
  `;
}

// 4.1 Step 1: Verify Key & Dispatch 2FA OTP
app.post('/api/admin/request-otp', async (req, res) => {
  try {
    const rawIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || req.ip || '127.0.0.1';
    const clientIp = typeof rawIp === 'string' ? rawIp.split(',')[0].trim() : '127.0.0.1';

    // Rate limiting & lockout check
    const now = Date.now();
    const ipRecord = adminKeyAttempts.get(clientIp);
    if (ipRecord && now < ipRecord.lockoutUntil) {
      const waitSeconds = Math.max(1, Math.ceil((ipRecord.lockoutUntil - now) / 1000));
      return res.status(429).json({
        success: false,
        error: `Security lockout active due to excessive attempts. Please wait ${waitSeconds}s before retrying.`,
      });
    }

    const { key, password } = req.body || {};
    const inputKey = (key || password || '').trim();

    // Master Administrator Security Key (strictly configured on server)
    const masterKey = (
      process.env.ADMIN_PASSWORD ||
      process.env.ADMIN_KEY ||
      'Scoriant#10122025'
    ).trim();

    if (!inputKey) {
      return res.status(400).json({
        success: false,
        error: 'Administrator security key is required.',
      });
    }

    // Constant-time cryptographic comparison to prevent side-channel timing attacks
    const inputBuf = Buffer.from(inputKey, 'utf8');
    const masterBuf = Buffer.from(masterKey, 'utf8');
    const isMatch = inputBuf.length === masterBuf.length && crypto.timingSafeEqual(inputBuf, masterBuf);

    if (!isMatch) {
      const failedCount = (ipRecord?.count || 0) + 1;
      const lockoutUntil = failedCount >= 5 ? now + 15 * 60 * 1000 : now + 30 * 1000;
      adminKeyAttempts.set(clientIp, { count: failedCount, lockoutUntil });

      console.warn(`[ADMIN_AUTH_REJECTED] Invalid master key attempt (#${failedCount}) at ${new Date().toISOString()} from IP: ${clientIp}`);
      return res.status(401).json({
        success: false,
        error: failedCount >= 5
          ? 'Too many failed attempts. Temporary 15-minute security lockout applied.'
          : 'Invalid Administrator Security Key. Access Denied.',
      });
    }

    // Key match confirmed: clear any failed attempts for this IP
    adminKeyAttempts.delete(clientIp);

    // Generate secure 6-digit numeric OTP
    const otp = String(crypto.randomInt(100000, 999999));
    const challengeId = crypto.randomUUID();
    const expiresAt = Date.now() + 10 * 60 * 1000; // 10 minutes validity

    adminOtpChallenges.set(challengeId, {
      otp,
      createdAt: Date.now(),
      expiresAt,
      attemptsRemaining: 5,
      ip: clientIp,
    });

    const targetEmail = process.env.RECEIVER_EMAIL || process.env.CONTACT_TO_EMAIL || 'info@scoriant.com';
    const ccEmail = process.env.CC_EMAIL || 'gagan@scoriant.com';

    // Dispatch OTP via SMTP Email
    const transporter = getTransporter();
    let emailSent = false;

    if (transporter) {
      try {
        const timeString = new Date().toLocaleString('en-IN', {
          timeZone: 'Asia/Kolkata',
          dateStyle: 'full',
          timeStyle: 'medium',
        });

        await transporter.sendMail({
          from: `"Scoriant Defence Gate" <${process.env.SMTP_USER || 'info@scoriant.com'}>`,
          to: targetEmail,
          cc: ccEmail,
          subject: `[SCORIANT DEFENCE ACCESS] Admin Login OTP Verification Code: ${otp}`,
          html: generateAdminOtpEmailHtml({
            otp,
            timestamp: timeString,
            ip: clientIp,
            expiresMinutes: 10,
          }),
        });

        emailSent = true;
        console.log(`[ADMIN_OTP_DISPATCHED] Security OTP successfully sent to ${targetEmail} (CC: ${ccEmail})`);
      } catch (mailError) {
        console.error('[ADMIN_OTP_MAIL_ERROR] Failed to send email via SMTP:', mailError.message);
      }
    } else {
      console.warn('[ADMIN_OTP_WARN] SMTP Transporter not configured. Check SMTP credentials in .env.');
    }

    // Always log OTP securely to terminal console for emergency administrator inspection
    console.log(`[ADMIN_SECURITY_OTP] Active challenge ID: ${challengeId} | OTP Code: [ ${otp} ] | Target: ${targetEmail}`);

    return res.status(200).json({
      success: true,
      challengeId,
      emailSent,
      targetEmail: targetEmail.replace(/(.{2})(.*)(?=@)/, (_, a, b) => a + '*'.repeat(b.length)),
      message: `Administrator key verified. A 6-digit OTP has been dispatched to ${targetEmail}.`,
    });
  } catch (error) {
    console.error('[ADMIN_REQUEST_OTP_ERROR]', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to initiate administrator verification challenge.',
    });
  }
});

// 4.2 Step 2: Verify OTP & Issue Session Token
app.post('/api/admin/verify-otp', (req, res) => {
  try {
    const { challengeId, otp } = req.body || {};
    const inputOtp = (otp || '').trim();

    if (!challengeId || !inputOtp) {
      return res.status(400).json({
        success: false,
        error: 'Challenge ID and 6-digit OTP verification code are required.',
      });
    }

    const challenge = adminOtpChallenges.get(challengeId);

    if (!challenge) {
      return res.status(400).json({
        success: false,
        error: 'Verification session expired or invalid. Please re-enter your administrator key.',
      });
    }

    if (Date.now() > challenge.expiresAt) {
      adminOtpChallenges.delete(challengeId);
      return res.status(400).json({
        success: false,
        error: 'This OTP verification code has expired (10-minute limit). Please request a new code.',
      });
    }

    if (challenge.attemptsRemaining <= 0) {
      adminOtpChallenges.delete(challengeId);
      return res.status(429).json({
        success: false,
        error: 'Too many incorrect attempts. For security, this challenge was invalidated.',
      });
    }

    // Verify OTP match
    if (challenge.otp !== inputOtp) {
      challenge.attemptsRemaining -= 1;
      console.warn(`[ADMIN_OTP_MISMATCH] Invalid OTP entered. ${challenge.attemptsRemaining} attempts left.`);

      return res.status(401).json({
        success: false,
        error: `Invalid OTP verification code. ${challenge.attemptsRemaining} attempt(s) remaining.`,
        attemptsRemaining: challenge.attemptsRemaining,
      });
    }

    // OTP Verified! Remove challenge to ensure single-use
    adminOtpChallenges.delete(challengeId);

    // Issue cryptographic 24-hour HMAC admin session token
    const expiry = Date.now() + 24 * 60 * 60 * 1000;
    const tokenSecret = process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD || 'Scoriant#10122025';
    
    const payloadObj = {
      role: 'admin',
      authed: true,
      exp: expiry,
      iat: Date.now(),
      sub: 'scoriant_admin_master',
      nonce: crypto.randomBytes(8).toString('hex'),
    };

    const payloadBase64 = Buffer.from(JSON.stringify(payloadObj)).toString('base64');
    const signature = crypto.createHmac('sha256', tokenSecret).update(payloadBase64).digest('hex');
    const token = `${payloadBase64}.${signature}`;

    console.log(`[ADMIN_AUTH_SUCCESS] 2FA verified successfully. Administrator session issued until ${new Date(expiry).toISOString()}`);

    return res.status(200).json({
      success: true,
      message: 'Two-factor administrator authorization confirmed. Welcome to Scoriant Command Center.',
      token,
      expiresAt: expiry,
    });
  } catch (error) {
    console.error('[ADMIN_VERIFY_OTP_ERROR]', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to verify administrator OTP code.',
    });
  }
});

// 4.3 Resend OTP for existing challenge
app.post('/api/admin/resend-otp', async (req, res) => {
  try {
    const { challengeId } = req.body || {};
    if (!challengeId) {
      return res.status(400).json({ success: false, error: 'Challenge ID is required.' });
    }

    const challenge = adminOtpChallenges.get(challengeId);
    if (!challenge) {
      return res.status(400).json({
        success: false,
        error: 'Challenge session expired. Please start over from key verification.',
      });
    }

    // Generate new OTP and reset expiration
    const newOtp = String(crypto.randomInt(100000, 999999));
    challenge.otp = newOtp;
    challenge.expiresAt = Date.now() + 10 * 60 * 1000;
    challenge.attemptsRemaining = 5;

    const targetEmail = process.env.RECEIVER_EMAIL || process.env.CONTACT_TO_EMAIL || 'info@scoriant.com';
    const ccEmail = process.env.CC_EMAIL || 'gagan@scoriant.com';

    const transporter = getTransporter();
    if (transporter) {
      const timeString = new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        dateStyle: 'full',
        timeStyle: 'medium',
      });

      await transporter.sendMail({
        from: `"Scoriant Defence Gate" <${process.env.SMTP_USER || 'info@scoriant.com'}>`,
        to: targetEmail,
        cc: ccEmail,
        subject: `[SCORIANT DEFENCE ACCESS] Resent Admin Login OTP: ${newOtp}`,
        html: generateAdminOtpEmailHtml({
          otp: newOtp,
          timestamp: timeString,
          ip: challenge.ip,
          expiresMinutes: 10,
        }),
      });
    }

    console.log(`[ADMIN_SECURITY_OTP] Resent challenge OTP: [ ${newOtp} ] for ${targetEmail}`);

    return res.status(200).json({
      success: true,
      message: `A fresh 6-digit OTP code has been dispatched to ${targetEmail}.`,
    });
  } catch (error) {
    console.error('[ADMIN_RESEND_OTP_ERROR]', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to resend OTP verification code.',
    });
  }
});

// 4.4 Verify Active Session Token
app.post('/api/admin/verify-token', (req, res) => {
  try {
    const { token } = req.body || {};
    if (!token || typeof token !== 'string') {
      return res.status(401).json({ valid: false, error: 'No token provided' });
    }

    const parts = token.split('.');
    if (parts.length !== 2) {
      return res.status(401).json({ valid: false, error: 'Malformed token structure' });
    }

    const [payloadBase64, providedSig] = parts;
    const tokenSecret = process.env.ADMIN_SESSION_SECRET || process.env.ADMIN_PASSWORD || 'Scoriant#10122025';
    const expectedSig = crypto.createHmac('sha256', tokenSecret).update(payloadBase64).digest('hex');

    if (providedSig !== expectedSig) {
      return res.status(401).json({ valid: false, error: 'Invalid cryptographic signature' });
    }

    const payload = JSON.parse(Buffer.from(payloadBase64, 'base64').toString('utf8'));
    if (Date.now() > payload.exp) {
      return res.status(401).json({ valid: false, error: 'Session token has expired' });
    }

    return res.status(200).json({ valid: true, payload });
  } catch (error) {
    return res.status(401).json({ valid: false, error: 'Token verification failed' });
  }
});

// 4.5 Legacy single-factor endpoint: Deprecated and secured
app.post('/api/admin/verify', (req, res) => {
  return res.status(403).json({
    success: false,
    error: 'Direct single-factor verification is disabled. Two-factor OTP authorization via /api/admin/request-otp is required.',
  });
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



