## Instructions for Configuring Contact Form Email

This document explains how to configure the email settings for the contact form on your website.

### 1. Update Email Sending Credentials (`.env.local` file)

The website uses an email account to send contact form submissions to your business email. You need to provide the credentials for this sending account.

**Location:** Open the `.env.local` file located in the main project folder. If not already present, create it within the project folder.
You should be able to see it directly beneath the .env.example file.

**Variables to update:**

*   `EMAIL_USER`: The email address of the account that will send the form submissions (e.g., `your-sending-email@example.com`).
*   `EMAIL_PASS`: The password for the `EMAIL_USER` account.

**Example:**

EMAIL_USER=your-sending-email@gmail.com
EMAIL_PASS=yourgmailapppassword
```

**Important Notes for Gmail Users:**
*   If you are using a Gmail account for `EMAIL_USER` and have 2-Step Verification enabled (which is highly recommended), you will need to generate an "App Password" for this application.
    1.  Go to your Google Account settings.
    2.  Navigate to "Security".
    3.  Under "Signing in to Google," select "App passwords." You may need to sign in again.
    4.  At the bottom, choose "Select app" and choose "Other (Custom name)".
    5.  Name it (e.g., "Website Contact Form") and click "Generate."
    6.  Use the generated 16-character password as your `EMAIL_PASS`.
*   You might also need to enable "Less secure app access" if you are not using 2-Step Verification, but using an App Password is more secure.



### Notes for Using Non-Gmail Email Providers

If you are **not** using a Gmail account for the `EMAIL_USER` (the account that receives the emails), some additional configuration might be necessary in the `app/api/contact/route.js` file.

The current setup is optimized for Gmail:

// In app/api/contact/route.js
const transporter = nodemailer.createTransport({
  service: "gmail", // This line specifies Gmail.
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

Examples for Common Providers:

1. Outlook / Office 365 / Hotmail:

EMAIL_USER in .env.local would be your Outlook/Office 365 email (e.g., your-email@outlook.com or your-email@yourcompany.com).
EMAIL_PASS in .env.local would be your regular password for that account.

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com", // Microsoft's SMTP server
  port: 587,                   // Standard port for secure SMTP
  secure: false,               // true for 465, false for other ports (STARTTLS)
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    ciphers:'SSLv3' // Necessary for some Office 365 configurations
  }
});


2. Zoho Mail:

EMAIL_USER in .env.local would be your Zoho email.
EMAIL_PASS in .env.local would be your regular Zoho password.

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com", // Zoho's SMTP server
  port: 465,              // Port for SSL
  secure: true,           // Use SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

Important Considerations:

Consult Your Provider: Always check your email provider's official documentation for the most accurate and up-to-date SMTP settings.

Security: Ensure you are using a secure connection (TLS/SSL) if your provider supports it.

Firewall/Port Blocking: Some hosting environments or internet service providers might block common email ports. If you have trouble sending emails, check if this is the case.

Sending Limits: Be aware of any sending limits imposed by your email provider to avoid your account being flagged for spam.



**After updating `.env.local`, you will need to restart the website server for the changes to take effect.**

### 2. Set Your Business Email as the Recipient (`route.js` file)

This step configures where the contact form submissions will be delivered.

**Location:** Open the `route.js` file

**Line to update:**

Find the following section of code (around line 28-32):

```javascript
    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'placeholderjohnsmith333@gmail.com', // <--- REPLACE THIS EMAIL
      subject,
      text: emailText,
    });
```

**Action:**
Replace `'placeholderjohnsmith333@gmail.com'` with your actual business email address where you want to receive the contact form submissions. For example:

```javascript
    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'your-business-email@yourdomain.com', // Your actual business email
      subject,
      text: emailText,
    });
```

**Save the `route.js` file.** The changes should take effect after the server updates (this might be automatic in development, or require a redeploy in production).

---

If you have any questions or encounter issues, please contact your developer.
