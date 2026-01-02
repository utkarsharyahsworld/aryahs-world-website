import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import multer from "multer"; // NEW: For handling file uploads

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173", // Allow your React app
  methods: ["POST", "GET"],
  credentials: true
}));
app.use(express.json());

// Configure Multer for File Uploads (Memory Storage for Email Attachments)
const storage = multer.memoryStorage();
const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 } // Limit file size to 5MB
});

// Email Transporter Configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// Utility: Validate Email Format
const validateEmail = (email) => {
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
};

// ==========================================
// 1. CONTACT FORM ENDPOINT
// ==========================================
app.post("/api/contact", async (req, res) => {
  try {
    const data = req.body;

    // 1. Validation (Ensure matches frontend fields)
    if (!data.name || !data.email || !data.subject || !data.message) {
      return res.status(400).json({ 
        success: false, 
        message: "Please fill in all required fields (Name, Email, Subject, Message)." 
      });
    }

    // 2. Email to Company (Professional Template)
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.COMPANY_EMAIL,
      subject: `[Contact Inquiry] ${data.subject} - ${data.name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: sans-serif;">
          <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            
            <div style="background-color: #1e40af; padding: 30px 20px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Business Inquiry</h1>
              <p style="color: #dbeafe; margin: 8px 0 0 0;">Website Contact Form</p>
            </div>

            <div style="padding: 40px 30px;">
              <p style="color: #374151; font-size: 16px; margin-bottom: 25px;">
                <strong>${data.name}</strong> sent a message regarding <em>"${data.subject}"</em>.
              </p>

              <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                <tr style="border-bottom: 1px solid #e5e7eb;"><td style="padding: 12px 0; color: #6b7280; font-weight: bold;">Name</td><td style="padding: 12px 0; color: #111827;">${data.name}</td></tr>
                <tr style="border-bottom: 1px solid #e5e7eb;"><td style="padding: 12px 0; color: #6b7280; font-weight: bold;">Email</td><td style="padding: 12px 0;"><a href="mailto:${data.email}" style="color: #2563eb;">${data.email}</a></td></tr>
                <tr style="border-bottom: 1px solid #e5e7eb;"><td style="padding: 12px 0; color: #6b7280; font-weight: bold;">Phone</td><td style="padding: 12px 0; color: #111827;">${data.phone || 'Not provided'}</td></tr>
                <tr style="border-bottom: 1px solid #e5e7eb;"><td style="padding: 12px 0; color: #6b7280; font-weight: bold;">Company</td><td style="padding: 12px 0; color: #111827;">${data.company || 'Not provided'}</td></tr>
              </table>

              <div style="background-color: #f9fafb; padding: 20px; border-radius: 6px; border-left: 4px solid #2563eb;">
                <strong>Message:</strong><br/>
                <span style="color: #4b5563;">${data.message.replace(/\n/g, '<br>')}</span>
              </div>
            </div>
            
            <div style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb; color: #9ca3af; font-size: 12px;">
              © ${new Date().getFullYear()} Aryahs World Venture
            </div>
          </div>
        </body>
        </html>
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Message sent successfully!" });

  } catch (error) {
    console.error("Contact Error:", error);
    res.status(500).json({ success: false, message: "Server error sending message." });
  }
});
// ==========================================
// 2. CAREERS FORM ENDPOINT (With File Upload)
// ==========================================
app.post("/api/career", upload.single('resume'), async (req, res) => {
  try {
    // req.body contains text fields, req.file contains the resume
    const data = req.body;
    const resumeFile = req.file;

    // Validation
    if (!data.name || !data.email || !resumeFile) {
      return res.status(400).json({ 
        success: false, 
        message: "Missing required fields or resume file." 
      });
    }

    // Email to HR/Company with Attachment
    // Email to HR/Company with Attachment
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.HR_EMAIL, 
      subject: `[New Application] ${data.position} - ${data.name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
          
          <div style="max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            
            <div style="background-color: #2563eb; padding: 30px 20px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">Job Application Received</h1>
              <p style="color: #bfdbfe; margin: 8px 0 0 0; font-size: 16px;">Source: Careers Portal</p>
            </div>

            <div style="padding: 40px 30px;">
              <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-bottom: 25px;">
                Hello HR Team,
                <br/><br/>
                A new candidate has applied for the <strong>${data.position}</strong> position. Please find their details below:
              </p>

              <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                <tr style="border-bottom: 1px solid #e5e7eb;">
                  <td style="padding: 12px 0; color: #6b7280; font-weight: 600; width: 35%;">Full Name</td>
                  <td style="padding: 12px 0; color: #111827;">${data.name}</td>
                </tr>
                <tr style="border-bottom: 1px solid #e5e7eb;">
                  <td style="padding: 12px 0; color: #6b7280; font-weight: 600;">Position</td>
                  <td style="padding: 12px 0; color: #2563eb; font-weight: 600;">${data.position}</td>
                </tr>
                <tr style="border-bottom: 1px solid #e5e7eb;">
                  <td style="padding: 12px 0; color: #6b7280; font-weight: 600;">Email Address</td>
                  <td style="padding: 12px 0; color: #111827;">
                    <a href="mailto:${data.email}" style="color: #2563eb; text-decoration: none;">${data.email}</a>
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid #e5e7eb;">
                  <td style="padding: 12px 0; color: #6b7280; font-weight: 600;">Phone Number</td>
                  <td style="padding: 12px 0; color: #111827;">${data.phone || '<span style="color:#9ca3af; font-style:italic;">Not provided</span>'}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; color: #6b7280; font-weight: 600;">Portfolio / LinkedIn</td>
                  <td style="padding: 12px 0; color: #111827;">
                    ${data.portfolio 
                      ? `<a href="${data.portfolio}" style="color: #2563eb; text-decoration: underline;">View Profile</a>` 
                      : '<span style="color:#9ca3af; font-style:italic;">Not provided</span>'
                    }
                  </td>
                </tr>
              </table>

              <div style="background-color: #eff6ff; border-left: 4px solid #2563eb; padding: 15px; border-radius: 4px;">
                <p style="margin: 0; color: #1e40af; font-size: 14px;">
                  <strong>📎 Resume Attached:</strong> The candidate's resume file is attached to this email.
                </p>
              </div>

              ${data.coverLetter ? `
                <div style="margin-top: 30px;">
                  <h3 style="color: #111827; font-size: 16px; margin-bottom: 10px;">Cover Letter:</h3>
                  <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; border: 1px solid #e5e7eb; color: #4b5563; font-size: 14px; line-height: 1.6;">
                    ${data.coverLetter.replace(/\n/g, '<br>')}
                  </div>
                </div>
              ` : ''}

            </div>

            <div style="background-color: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                © ${new Date().getFullYear()} Aryahs World Venture Recruitment System
              </p>
            </div>

          </div>
        </body>
        </html>
      `,
      attachments: [
        {
          filename: resumeFile.originalname,
          content: resumeFile.buffer
        }
      ]
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Application submitted successfully!" });

  } catch (error) {
    console.error("Career Error:", error);
    res.status(500).json({ success: false, message: "Server error processing application." });
  }
});

// ==========================================
// 3. NEWSLETTER ENDPOINT
// ==========================================
app.post("/api/subscribe", async (req, res) => {
  try {
    const { email } = req.body;
    if (!email || !validateEmail(email)) {
      return res.status(400).json({ success: false, message: "Invalid email." });
    }

    // Notify Company
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.COMPANY_EMAIL,
      subject: `New Newsletter Subscriber: ${email}`,
      text: `Add this email to your list: ${email}`
    });

    // Notify User
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Welcome to Aryahs World Newsletter",
      html: `<h3>Welcome!</h3><p>You have successfully subscribed to our newsletter.</p>`
    });

    res.status(200).json({ success: true, message: "Subscribed successfully!" });
  } catch (error) {
    console.error("Subscribe Error:", error);
    res.status(500).json({ success: false, message: "Server error." });
  }
});

// Health Check
app.get("/api/health", (req, res) => res.json({ status: "Backend is running" }));

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});