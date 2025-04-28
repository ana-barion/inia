export async function POST(req) {
  try {
    const data = await req.json();
    const { firstName, lastName, email, phone, message, role } = data;

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
        message: "Form submitted successfully. We will contact you soon.",
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
