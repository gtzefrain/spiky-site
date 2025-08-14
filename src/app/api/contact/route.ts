import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const { name, email, query } = await req.json()

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Spiky Site" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nQuery:\n${query}`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}