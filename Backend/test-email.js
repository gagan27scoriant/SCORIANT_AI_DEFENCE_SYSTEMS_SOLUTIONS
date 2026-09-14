require('dotenv').config();
const nodemailer = require('nodemailer');

async function sendTestEmail() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = parseInt(process.env.SMTP_PORT || '587', 10);
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;
  const receiver = process.env.RECEIVER_EMAIL || 'info@scoriant.com';

  console.log('--- SMTP Configuration Test ---');
  console.log(`Host: ${host}`);
  console.log(`Port: ${port}`);
  console.log(`Secure (SSL/TLS): ${secure}`);
  console.log(`User: ${user ? user.substring(0, 3) + '***' : 'NOT SET'}`);
  console.log(`To Receiver: ${receiver}`);
  console.log('-------------------------------');

  if (!host || !user || !pass) {
    console.error('ERROR: SMTP_HOST, SMTP_USER, or SMTP_PASS is missing in Backend/.env!');
    process.exit(1);
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user,
      pass,
    },
  });

  try {
    console.log('Verifying SMTP transporter connection...');
    await transporter.verify();
    console.log('✅ SMTP Server Connection Verified Successfully!');

    console.log(`Sending test email to ${receiver}...`);
    const info = await transporter.sendMail({
      from: `"${process.env.SMTP_FROM_NAME || 'Scoriant Portal Test'}" <${process.env.SMTP_FROM_EMAIL || user}>`,
      to: receiver,
      subject: `[Scoriant Test] SMTP Email Verification - ${new Date().toLocaleTimeString()}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 24px; background: #0b0f19; color: #ffffff; border-radius: 12px; max-width: 600px;">
          <h2 style="color: #c084fc; margin-top: 0;">🚀 Scoriant SMTP Test Succeeded!</h2>
          <p style="color: #cbd5e1; font-size: 15px; line-height: 1.6;">
            This is a test notification confirming that your SMTP server credentials in <strong>.env</strong> are working correctly.
          </p>
          <div style="background: rgba(255,255,255,0.08); padding: 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.15); margin: 20px 0;">
            <p style="margin: 4px 0; color: #94a3b8; font-size: 13px;"><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
            <p style="margin: 4px 0; color: #94a3b8; font-size: 13px;"><strong>Host:</strong> ${host}:${port}</p>
            <p style="margin: 4px 0; color: #94a3b8; font-size: 13px;"><strong>Destination:</strong> ${receiver}</p>
          </div>
          <p style="color: #64748b; font-size: 12px; margin-bottom: 0;">
            Scoriant AI Defence Systems Solutions • Automated Test Dispatch
          </p>
        </div>
      `,
    });

    console.log('✅ Test Email Sent Successfully!');
    console.log(`Message ID: ${info.messageId}`);
    if (info.response) {
      console.log(`Server Response: ${info.response}`);
    }
  } catch (err) {
    console.error('❌ Failed to send email:');
    console.error(err.message || err);
    if (err.code) console.error(`Error Code: ${err.code}`);
    if (err.command) console.error(`Failed Command: ${err.command}`);
  }
}

sendTestEmail();
