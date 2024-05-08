import { promisify } from "util";
import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MY_EMAIL,
    pass: process.env.MY_PASSWORD,
  },
});

const sendMailPromise = promisify(transport.sendMail.bind(transport));

export async function POST(request: NextRequest) {
  const { email, name, message, phone } = await request.json();

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    subject: `Message from ${name}`,
    text: `Hi I'm ${name} with email (${email}) and phone number ${phone} \n ${message} \n From my portfolio site`,
  };

  try {
    await sendMailPromise(mailOptions);
    const jsonResponse = { message: "Email sent" };
    //console.log("Response:", jsonResponse); // Add this line for logging
    return NextResponse.json(jsonResponse, { status: 200 });
  } catch (err) {
    const errorResponse = { error: err };
    //console.log("Error Response:", errorResponse); // Add this line for logging
    return NextResponse.json(errorResponse, { status: 500 });
  }
}
