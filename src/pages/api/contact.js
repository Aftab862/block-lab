require("dotenv").config();
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message ,service , phone } = req.body;

    const MAIL_USER = process.env.MAIL_USER || "";
    const MAIL_PASS = process.env.MAIL_PASS || "";

  
   
 try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      secure: false, // true for port 465, false for 587
      auth: {
        user: MAIL_USER,
        pass: MAIL_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: `"${name}" <${MAIL_USER}>`,
      to: MAIL_USER,
      subject: `New Message from ${name}`,
      html: `
        <h3>Contact Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully." });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).json({ error: "Email could not be sent." });
  }

  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
