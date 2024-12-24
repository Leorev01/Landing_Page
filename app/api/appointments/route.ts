import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import path from 'path';
import fs from 'fs';
const logoPath = path.join(process.cwd(), 'public/images/SlickSite3.png');

interface AppointmentRequest {
  name: string;
  email: string;
  phone: string;
  message: string;
  date: string;
  time: string;
}

const transporter = nodemailer.createTransport({
  service: 'gmail', // or you can use another service like SendGrid, Mailgun, etc.
  auth: {
    user: process.env.EMAIL_USER, // Your email address
    pass: process.env.EMAIL_PASS, // Your email password or app-specific password
  },
});

export async function POST(req: NextRequest) {
  const { name, email, phone, message, date, time }: AppointmentRequest = await req.json();

  // Email to admin
  const adminMailOptions = {
    from: process.env.EMAIL_USER, // sender address
    to: process.env.EMAIL_USER, // receiver address (your email)
    subject: 'New Appointment Scheduled',
    text: `
      You have received a new appointment request:

      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Date: ${date}
      Time: ${time}
      Message: ${message || 'No message provided'}
    `,
  };

  // Confirmation email to user
  const userMailOptions = {
    from: process.env.EMAIL_USER, // sender address
    to: email, // user's email address
    subject: 'Appointment Confirmation',
    html: `
      <div>
        <img src="cid:logo" alt="Logo" style="width: 200px; height: auto;"/><br>
        Dear ${name},<br><br>

        Thank you for booking your appointment with us!<br><br>

        Here are the details of your appointment:<br>
        <strong>Date:</strong> ${date}<br>
        <strong>Time:</strong> ${time}<br><br>

        If you have any questions, feel free to contact us at ${process.env.EMAIL_USER}.<br><br>

        We look forward to meeting you!<br><br>

        Best regards,<br>
        Slick Site Team
      </div>
    `,
    attachments: [
      {
        filename: 'logo.png', // The file name for the image
        content: fs.readFileSync(logoPath), // The image content (buffer)
        cid: 'logo',           // Content ID to reference the image inline
      },
    ],
  };

  try {
    // Send email to admin (without logo)
    await transporter.sendMail(adminMailOptions);

    // Send confirmation email to user (with logo)
    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { message: 'Appointment request sent successfully and confirmation email sent to user.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send appointment request.' }, { status: 500 });
  }
}
