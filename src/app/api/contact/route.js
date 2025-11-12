import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL, // Your email
      subject: `New message from ${name} via Contact Form`,
      text: message,
      html: `<p>${message}</p><p>From: ${name} (${email})</p>`,
    });

    return NextResponse.json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Failed to send message' }, { status: 500 });
  }
}
