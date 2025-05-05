import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const data = await req.json();
    const { firstName, lastName, email, phone, message, role } = data;

    // Compose subject
    const subject = `[${role}] New Contact Submission`;

    // Compose email body
    const emailText = `
INIA Biosciences Contact Form Submission
----------------------------
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}
Role: ${role}

Message:
${message}
    `.trim();

    // Set up transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // or your email provider
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'placeholderjohnsmith333@gmail.com', // replace with your destination address
      subject,
      text: emailText,
    });

    // Log the form submission
    console.log("Contact Form Submission:", {
      firstName,
      lastName,
      email,
      phone,
      message,
      role,
      timestamp: new Date().toISOString(),
    });

    // Return success response
    return new Response(
      JSON.stringify({
        success: true,
        message: "Email sent successfully",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    console.error("Form submission error:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to process form submission",
        details: error.message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }
}