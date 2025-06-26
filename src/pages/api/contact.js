require("dotenv").config();
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    const Admin_EMAIL = process.env.Admin_EMAIL || "";
    const Admin_PASSWORD = process.env.Admin_PASSWORD || "";

    console.log("Admin Email:", Admin_EMAIL);
    console.log("Admin Password:", Admin_PASSWORD);
    const transporter = nodemailer.createTransport({
      service: "Gmail", // Or another SMTP provider
      auth: {
        user: Admin_EMAIL,
        pass: Admin_PASSWORD,
      },
    });

    try {
      await transporter.sendMail({
        from: `"${name}" <${email}>`, // 👤 USER is the sender
        to: Admin_EMAIL, // 📥 ADMIN (you) are the receiver
        subject: `New Message from ${name}`,
        text: `${name} (${email}) wrote:\n\n${message}`,
        html: `
    <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f9f9f9;">
      <h2 style="color: #4CAF50;">New Contact Message</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <div style="margin-top: 20px; padding: 15px; background-color: #fff; border-left: 4px solid #4CAF50;">
        <p style="margin: 0;"><strong>Message:</strong></p>
        <p style="white-space: pre-line;">${message}</p>
      </div>
    </div>
  `,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error("Email sending error:", error);
      res.status(500).json({ error: "Email not sent" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
