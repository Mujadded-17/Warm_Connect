import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

async function sendTestMail() {
  try {
    const info = await transporter.sendMail({
      from: `"WarmConnect" <${process.env.EMAIL_USER}>`,
      to: "silviaalam134@gmail.com", // your email to test
      subject: "Test Email from WarmConnect",
      html: "<h1>This is a test email from WarmConnect backend</h1>",
    });
    console.log("Email sent:", info.messageId);
  } catch (err) {
    console.error("Error sending email:", err);
  }
}

sendTestMail();
