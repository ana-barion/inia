"use client";
import { useState } from "react";

export default function ContactPage() {
  const [role, setRole] = useState("");

  return (
    <section className="container mx-auto px-4 py-16">
      {/* Header Section with Custom Background */}
      <div className="bg-[#f9fafb] px-4 py-12 mb-8 rounded-lg">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Contact INIA BioSciences
          </h1>
          <p className="text-lg text-gray-600">How can we help you today</p>
        </div>
      </div>

      {/* Two Column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side: Full Contact Form */}
        <div>
          <form
            method="POST"
            action="/api/submit"
            className="bg-white p-6 rounded-lg border border-gray-300 space-y-4"
          >
            {/* Role Selection */}
            <div>
              <label htmlFor="role" className="block text-lg font-medium mb-1">
                I am a...
              </label>
              <select
                id="role"
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full border rounded p-2"
                required
              >
                <option value="">-- Select --</option>
                <option value="patient">Patient</option>
                <option value="investor">Investor</option>
                <option value="talent">Talent</option>
                <option value="dermatologist">Dermatologist</option>
              </select>
            </div>

            {/* First Name and Last Name */}
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label
                  htmlFor="firstName"
                  className="block text-lg font-medium mb-1"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full border rounded p-2"
                  required
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="lastName"
                  className="block text-lg font-medium mb-1"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full border rounded p-2"
                  required
                />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-lg font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border rounded p-2"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-lg font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full border rounded p-2"
                required
              />
            </div>

            {/* Message Box */}
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full border rounded p-2"
                required
              ></textarea>
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="mr-2"
                required
              />
              <label htmlFor="terms" className="text-sm">
                I agree to the privacy policy and terms of service
              </label>
            </div>

            {/* Animated Liquid Button */}
            <button type="submit" className="btn liquid w-full">
              <span>Send Message</span>
            </button>
          </form>
        </div>

        {/* Right Side: Info Boxes */}
        <div className="space-y-8">
          <div className="bg-[#f9fafb] p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <p>Address: [Placeholder Address]</p>
            <p>Phone: [Placeholder Number]</p>
            <p>Email: [Placeholder Email]</p>
          </div>

          <div className="bg-[#f9fafb] p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Our Location</h2>
            <div className="overflow-hidden rounded-lg">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.6410327003493!2d-71.08493008455015!3d42.34557397918565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e379e65054ea67%3A0x7d20291b3fc1b011!2s123%20Innovation%20Dr%2C%20Boston%2C%20MA%2002118%2C%20USA!5e0!3m2!1sen!2s!4v1630875018359!5m2!1sen!2s"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>

          <div className="bg-[#f9fafb] p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Office Hours</h2>
            <p>Monday to Friday: 9 AM - 5 PM</p>
          </div>
        </div>
      </div>

      {/* Custom CSS for Liquid Button Animation */}
      <style jsx>{`
        .btn {
          position: relative;
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          color: #000; /* initially black text */
          background: none;
          border: 2px solid #646cff;
          border-radius: 8px;
          cursor: pointer;
          overflow: hidden;
          /* transition for the text color */
          transition: color 0.1s ease;
        }

        .liquid {
          background: linear-gradient(#646cff 0 0) no-repeat
            calc(200% - var(--p, 0%)) 100% / 200% var(--p, 0.2em);
          /* delay the text color transition using transition delay on color */
          transition:
            background-position 0.3s ease,
            color 0.2s 0.3s ease;
        }

        .liquid:hover {
          --p: 100%;
          --t: 0.05s;
          color: #fff; /* text turns white after the delay */
        }
      `}</style>
    </section>
  );
}
