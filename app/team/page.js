import Image from "next/image";

import Footer from "@/components/layout/Footer";
import { client } from "@/sanity/lib/client";

const introQuery = `*[_type == "teamIntro"][0]{
  headline,
  description
}`;

const leadershipQuery = `*[_type == "leadershipMember"]{
  _id,
  name,
  title,
  description,
  image{
    asset->{
      url
    }
  }
}`;

const advisorsQuery = `*[_type == "teamMember"]{
  _id,
  name,
  title,
  description,
  email,
  linkedin,
  image{
    asset->{
      url
    }
  }
}`;

export default async function TeamPage() {
  const leadership = await client.fetch(leadershipQuery);
  const advisors = await client.fetch(advisorsQuery);
  const intro = await client.fetch(introQuery);

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <main className="flex-grow">
        {/* Intro Section */}
        <section className="text-center py-16 px-6">
          <h1 className="text-4xl font-semibold mb-4">
            {intro?.headline || "Meet Our Team"}
          </h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            {intro?.description || "Default fallback description goes here."}
          </p>
        </section>

        {/* Leadership Section */}
        <section className="bg-gray-100 py-16 px-6">
          <h2 className="text-2xl font-bold text-center mb-10">
            Leadership Team
          </h2>
          <div className="grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">
            {leadership.map((person) => (
              <div key={person._id} className="text-center">
                <Image
                  src={person.image?.asset?.url || "/placeholder.png"}
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
            {advisors.map((member) => (
              <div
                key={member._id}
                className="bg-white border rounded-xl p-6 text-center shadow-sm"
              >
                <Image
                  src={member.image?.asset?.url || "/placeholder.png"}
                  alt={member.name}
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-medium">{member.name}</h3>
                <p className="text-sm text-gray-500 mb-1">{member.title}</p>
                <p className="text-sm text-gray-600 mb-3">
                  {member.description}
                </p>
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
