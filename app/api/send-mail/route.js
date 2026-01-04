import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, mobile, company, service, message } = body;

    if (!firstName || !lastName || !email || !mobile) {
      return new Response(JSON.stringify({ success: false, message: "Missing fields" }), { status: 400 });
    }

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 465,        // or 587
  secure: true,     // true for 465, false for 587
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    rejectUnauthorized: false,  // ✅ ignore self-signed certs
  },
});


    await transporter.sendMail({
      from: process.env.SMTP_USER, // must be your SMTP account
      replyTo: email,               // optional: original sender
      to: process.env.RECIPIENT_EMAIL,    // where you want to receive the email
      subject: "New Contact Form Submission",
      text: `${firstName} ${lastName} (${email}, ${mobile})\nCompany: ${company}\nService: ${service}\nMessage: ${message}`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (err) {
    console.error("Mail Error:", err);
    return new Response(JSON.stringify({ success: false, message: "Server error" }), { status: 500 });
  }
}

export async function GET() {
  return new Response("Method Not Allowed", { status: 405 });
}
