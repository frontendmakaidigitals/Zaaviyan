import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
export async function POST(req: Request) {
  try {
    interface FormData {
      firstName: string;
      lastName: string;
      email: string;
      message: string;
      cv: File;
    }
    const formData = await req.formData(); // Use formData() if sending FormData
    const file = formData.get("cv") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Convert the file into a Buffer
    const buffer = Buffer.from(await file.arrayBuffer());
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.NEXT_PUBLIC_EMAIL_USER,
      to: process.env.NEXT_PUBLIC_EMAIL_TO,
      subject: `New Contact Form Submission from ${formData.get("firstName")}`,
      text: `Name: ${
        String(formData.get("firstName") || "") +
        " " +
        String(formData.get("lastName") || "")
      }\nEmail: ${formData.get("email")}\nMessage: ${formData.get("message")}`,
      attachments: [
        {
          filename: file.name,
          content: buffer,
        },
      ],
    };

    await transporter.sendMail(mailOptions);
    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "File upload failed" }, { status: 500 });
  }
}
