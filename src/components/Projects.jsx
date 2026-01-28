import React from "react";

const posts = [
  {
    id: 1,
    title: "AI Campus",
    href: "https://github.com/ANIKET0102",
    description:
      " AI-Integrated Centralized ERP System for Educational Institutions. Developed a project demonstrating practical applications of AI/ML in solving real-world problems. ",
    date: "June, 2025",
    // datetime: "2020-03-16",
    category: { title: "Repo Link", href: "https://github.com/ANIKET0102" },
    imageUrl:
      "https://multipurposethemes.com/wp-content/uploads/2023/04/ltr-dark-dashboard.jpg",
  },
  {
    id: 2,
    title: "Personalized Career and Skills Advisor",
    href: "#",
    description:
      "• Designed and built a system to generate career & skill recommendations based on user background. • Built modules for skill extraction, gap analysis, learning roadmap, and interactive UI.",
    date: "Sept, 2025",
    // datetime: "2020-03-10",
    category: { title: "Repo Link", href: "https://github.com/ANIKET0102" },
    imageUrl:
      "https://i.pinimg.com/originals/59/b6/f6/59b6f67972e3b62e086359e34aea0a57.png",
  },
  {
    id: 3,
    title: "Lenskart Clone ",
    href: "https://github.com/ANIKET0102/Lenskart-Clone",
    description:
      "Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis. Nostrud sint anim sunt aliqua. Nulla eu labore irure incididunt velit cillum quis magna dolore.",
    date: "MAr, 2024",
    // datetime: "2020-02-12",
    category: { title: "Repo Link", href: "https://github.com/ANIKET0102" },
    imageUrl: "https://pnggallery.com/wp-content/uploads/lenskart-logo-01.png",
  },
];

function Projects() {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Recent Projects
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-300">
            Check out some of the latest work and insights by me.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-700 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-400">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-800 px-3 py-1.5 font-medium text-gray-300 hover:bg-gray-700 transition"
                >
                  {post.category.title}
                </a>
              </div>
              <br />
              <div className="group relative">
                {/* <img src="\src\assets\Bg.png" alt="" /> */}
                <div className="relative w-full">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-indigo-400 transition">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-400">
                  {post.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
