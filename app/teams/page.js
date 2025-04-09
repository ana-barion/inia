"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const leadership = [
  {
    name: "Dragana Savic, Ph.D.",
    title: "Chief Executive Officer",
    image:
      "https://images.squarespace-cdn.com/content/v1/606b43789440fa6c414a5ac9/3735c446-e33d-42ea-beab-1107facdb8b4/Dragana.png?format=1500w",
    description:
      "Leading INIA’s mission to transform bioelectronic medicine with over 15 years of experience in medical device innovation.",
  },
  {
    name: "Shen Ning, M.D.",
    title: "Chief Scientific Officer",
    image:
      "https://images.squarespace-cdn.com/content/v1/606b43789440fa6c414a5ac9/6a7c7532-af03-44de-9181-22f41098d8b7/Shen.png?format=1500w",
    description:
      "Pioneering research in ultrasound technology and its applications in treating chronic inflammation.",
  },
];

const rndTeam = [
  {
    name: "Renee Ryan",
    title: "FORMER CEO OF CALA HEALTH",
    image:
      "https://images.squarespace-cdn.com/content/v1/606b43789440fa6c414a5ac9/58bf809f-069d-411b-af1b-b64d17cfb78e/1693788022486.jpeg?format=1000w",
    email: "renee@inia.com",
    linkedin: "#",
  },
  {
    name: "Brian Wagner",
    title: "FORMER COO OF GE HEALTHCARE",
    image:
      "https://images.squarespace-cdn.com/content/v1/606b43789440fa6c414a5ac9/2c303b1f-9186-4f3f-aef6-35317fe8ed85/1517731009158.jpeg?format=1000w",
    email: "brian@inia.com",
    linkedin: "#",
  },
  {
    name: "Pierre Rollin",
    title: "FOUNDER AND CEO OF ANKH IMPACT VENTURES",
    image:
      "https://images.squarespace-cdn.com/content/v1/606b43789440fa6c414a5ac9/234564f7-0af2-4c9f-8889-117a2715964b/Pierre_Rolin_NEW.jpg?format=1000w",
    email: "pierre@inia.com",
    linkedin: "#",
  },
];

export default function TeamPage() {
  return (
    <>
      <Header />

      <main className="bg-gray-50 text-gray-800">
        {/* Intro Section */}
        <section className="text-center py-16 px-6">
          <h1 className="text-4xl font-semibold mb-4">Meet Our Team</h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            Our dedicated team of scientists, engineers, and healthcare
            professionals are working together to revolutionize the treatment
            of chronic inflammation through innovative bioelectronic medicine.
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
                <img
                  src={person.image}
                  alt={person.name}
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
                <img
                  src={member.image}
                  alt={member.name}
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
    </>
  );
}
