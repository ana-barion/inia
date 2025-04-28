"use client";

import Image from "next/image";

import Footer from "@/components/layout/Footer";

const leadership = [
  {
    name: "Dragana Savic, Ph.D.",
    title: "Chief Executive Officer",
    image: "/DraganaTm.png",
    description:
      "Leading INIA's mission to transform bioelectronic medicine with over 15 years of experience in medical device innovation.",
  },
  {
    name: "Shen Ning, M.D.",
    title: "Chief Scientific Officer",
    image: "/ShenTm.png",
    description:
      "Pioneering research in ultrasound technology and its applications in treating chronic inflammation.",
  },
];

const rndTeam = [
  {
    name: "Renee Ryan",
    title: "FORMER CEO OF CALA HEALTH",
    image: "/ReneeTm.jpeg",
    email: "renee@inia.com",
    linkedin: "#",
  },
  {
    name: "Brian Wagner",
    title: "FORMER COO OF GE HEALTHCARE",
    image: "/BrianTm.jpeg",
    email: "brian@inia.com",
    linkedin: "#",
  },
  {
    name: "Pierre Rollin",
    title: "FOUNDER AND CEO OF ANKH IMPACT VENTURES",
    image: "/PierreTm.jpg",
    email: "pierre@inia.com",
    linkedin: "#",
  },
];

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <main className="flex-grow">
        {/* Intro Section */}
        <section className="text-center py-16 px-6">
          <h1 className="text-4xl font-semibold mb-4">Meet Our Team</h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            Our dedicated team of scientists, engineers, and healthcare
            professionals are working together to revolutionize the treatment of
            chronic inflammation through innovative bioelectronic medicine.
          </p>
        </section>

        {/* Leadership Section with Background Divider */}
        <section className="bg-gray-100 py-16 px-6">
          <h2 className="text-2xl font-bold text-center mb-10">
            Leadership Team
          </h2>
          <div className="grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
            {leadership.map((person) => (
              <div key={person.name} className="text-center">
                <Image
                  src={person.image}
                  alt={person.name}
                  width={256}
                  height={320}
                  className="w-64 h-80 mx-auto mb-4 rounded-lg object-cover shadow"
                />
                <h3 className="text-lg font-semibold">{person.name}</h3>
                <p className="text-sm text-gray-500">{person.title}</p>
                <p className="text-sm text-gray-600 mt-2">
                  {person.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Advisors Section */}
        <section className="px-6 py-24">
          <h2 className="text-2xl font-bold text-center mb-10">Advisors</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
            {rndTeam.map((member) => (
              <div
                key={member.name}
                className="bg-white border rounded-xl p-6 text-center shadow-sm"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-medium">{member.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{member.title}</p>
                <div className="flex justify-center gap-4 text-sm">
                  <a
                    href={`mailto:${member.email}`}
                    className="text-blue-600 hover:underline"
                  >
                    Email
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
