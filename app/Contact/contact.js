import { useState } from "react";

export default function ContactForm() {
  const [role, setRole] = useState("");
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form
        method="POST"
        action="/api/submit"
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4"
      >
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
            <option value="dermatologist">Dermatologist</option>
            <option value="investor">Investor</option>
            <option value="talent">Talent</option>
          </select>
        </div>

        {role && (
          <div className="space-y-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="w-full border rounded p-2"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="w-full border rounded p-2"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        )}
      </form>
    </main>
  );
}
