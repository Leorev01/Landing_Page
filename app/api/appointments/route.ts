import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface AppointmentRequest {
  name: string;
  email: string;
  phone: string;
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
  const { name, email, phone, date, time }: AppointmentRequest = await req.json();

  const mailOptions = {
    from: process.env.EMAIL_USER, // sender address
    to: process.env.NOTIFY_EMAIL, // receiver address (your email)
    subject: 'New Appointment Scheduled',
    text: `
      You have received a new appointment request:

      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Date: ${date}
      Time: ${time}
    `,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: 'Appointment request sent successfully.' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send appointment request.' }, { status: 500 });
  }
}
