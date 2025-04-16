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
            {/* "I am a:" label and dropdown */}
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

            {/* First Name and Last Name side by side */}
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

            {/* Checkbox for Terms */}
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

            {/* Send Message Button with liquid fill animation */}
            <button
              type="submit"
              className="liquid-fill bg-black text-white px-4 py-2 rounded w-full hover:bg-gray-800"
            >
              <span>Send Message</span>
            </button>
          </form>
        </div>

        {/* Right Side: Info Boxes with Map Integration in Between */}
        <div className="space-y-8">
          {/* Contact Information Box */}
          <div className="bg-[#f9fafb] p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <p>Address: [Placeholder Address]</p>
            <p>Phone: [Placeholder Number]</p>
            <p>Email: [Placeholder Email]</p>
          </div>

          {/* Map Integration Box */}
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

          {/* Office Hours Box */}
          <div className="bg-[#f9fafb] p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Office Hours</h2>
            <p>Monday to Friday: 9 AM - 5 PM</p>
          </div>
        </div>
      </div>

      {/* Scoped CSS for the liquid fill animation on the send button */}
      <style jsx>{`
        .liquid-fill {
          position: relative;
          overflow: hidden;
          transition: color 0.5s ease;
        }
        .liquid-fill::before {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 0;
          background-color: #4a90e2; /* Fill color */
          transition: height 0.5s ease;
          z-index: -1;
        }
        .liquid-fill:hover::before {
          height: 100%;
        }
        .liquid-fill:hover span {
          color: #ffffff;
          transition: color 0.5s ease;
        }
      `}</style>
    </section>
  );
}
