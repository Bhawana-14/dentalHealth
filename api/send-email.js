
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);


const getEmailTemplate = (name,email, phone, date='', message, type,subject='') => `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Inter', Helvetica, Arial, sans-serif; line-height: 1.6; color: #334155; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 20px auto; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); }
        .header { background-color: rgb(13, 113, 69); color: #fff; padding: 40px 20px; text-align: center; }
        .header h1 { margin: 0; font-size: 24px; font-weight: 900; letter-spacing: -0.025em; text-transform: uppercase; }
        .header p { margin: 10px 0 0; font-weight: 500; opacity: 0.9; }
        .content { padding: 40px; background-color: #ffffff; }
        .type-badge { display: inline-block; padding: 6px 12px; border-radius: 9999px; font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; background-color: #fef3c7; color: #92400e; margin-bottom: 24px; }
        .info-grid { border-top: 1px solid #f1f5f9; padding-top: 24px; }
        .info-row { margin-bottom: 16px; }
        .info-label { font-size: 11px; font-weight: 800; text-transform: uppercase; color: #64748b; letter-spacing: 0.05em; margin-bottom: 4px; }
        .info-value { font-size: 16px; font-weight: 500; color: #1e293b; }
        .message-box { background-color: #f8fafc; padding: 24px; border-radius: 12px; border: 1px solid #f1f5f9; margin-top: 24px; }
        .footer { background-color: #f8fafc; padding: 20px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Dental & Health</h1>
          <p>By Dr. Viyanti Wadhwa</p>
        </div>
        <div class="content">
          <div class="type-badge">${type === 'appointment' ? 'New Appointment Request' : 'New Contact Inquiry'}</div>
          
          <div class="info-grid">
            <div class="info-row">
              <div class="info-label">Patient Name</div>
              <div class="info-value">${name}</div>
            </div>
            
            <div class="info-row">
              <div class="info-label">Email Address</div>
              <div class="info-value">${email}</div>
            </div>

           ${subject ? `
            <div class="info-row">
              <div class="info-label">Subject</div>
              <div class="info-value">${subject}</div>
            </div>`:''}

          ${phone ? `
            <div class="info-row">
              <div class="info-label">Phone Number</div>
              <div class="info-value">${phone}</div>
            </div>`:''}

          
            
            ${date ? `
            <div class="info-row">
              <div class="info-label">Preferred Date</div>
              <div class="info-value">${date}</div>
            </div>` : ''}
          </div>

          <div class="message-box">
            <div class="info-label">Message Details</div>
            <div class="info-value" style="white-space: pre-wrap;">${message}</div>
          </div>
        </div>
        <div class="footer">
          &copy; ${new Date().getFullYear()} Dental & Health by Dr. Viyanti Wadhwa. All rights reserved.
        </div>
      </div>
    </body>
  </html>
`;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { name, email, phone, date, subject, message, type} = req.body;

  try {
    const title =
    type === "appointment"
      ? "New Appointment Booking"
      : "New Contact Message";

    const html = getEmailTemplate(
      name,
      email,
      phone,
      date,
      message,
      type,
      subject
    );

    await resend.emails.send({
      from: `Dental & Health <${process.env.FROM_EMAIL || "info@dentalandhealth.in"}>`,
      to: process.env.TO_EMAIL,
      subject: title,
      html: html,
    });

    return res.status(200).json({ success: true });

  } catch (err) {
    return res.status(500).json({ error: "Failed to send email" });
  }
}