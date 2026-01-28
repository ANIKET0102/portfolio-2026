import React from "react";

const links = [
  { name: "Github", href: "https://github.com/ANIKET0102" },
  { name: "Leetcode", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "Google Console", href: "#" },
];

const stats = [
  { name: "Projects", value: "10+" },
  { name: "Hackathons", value: "10+" },
  { name: "Internships", value: "4" },
  // { name: "Paid time off", value: "Unlimited" },
];

function About() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      {/* Background Image */}
      <img
        alt="About us background"
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />

      {/* Decorative Blur Shapes */}
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1097/845] w-[68.5rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            About
          </h2>
          <p className="mt-8 text-lg font-light text-gray-300 sm:text-xl/8">
            I am a results-driven Computer Science and Engineering student at
            Sandip University with a CGPA of 8.12, specializing in the
            intersection of AI development and UI/UX design. My professional
            background includes developing real-world AI/ML applications during
            an internship with the Edunet Foundation and optimizing user
            navigation by 15% as a UI/UX Design Intern at GROOTT Digital. I have
            a proven track record in high-stakes environments, having ranked 3rd
            among 200+ participants in the NIT Silchar UI/UX Hackathon and 7th
            at IIT Guwahati. With technical proficiency in React, Python, and
            Generative AI, I am passionate about building scalable, user-centric
            solutions like my AI-Campus ERP system, which improved faculty
            productivity by 20%.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          {/* Quick Links */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-indigo-400 transition"
              >
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>

          {/* Stats Section */}
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse gap-1">
                <dt className="text-base leading-7 text-gray-300">
                  {stat.name}
                </dt>
                <dd className="text-4xl font-bold tracking-tight text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default About;
