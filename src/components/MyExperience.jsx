
import React from "react";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";

const features = [
  {
    name: "Horizon Flare || Web-Development Intern.",
    description:
      "Developed a premium, high-end UI/UX for the Valore luxury handicraft e-commerce platform, implementing a refined design system featuring rounded components and sophisticated color palettes to enhance the digital shopping experience. ",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Edunet Foundation || AI Intern.",
    description:
      "Developed a project focused on practical AI/ML applications to solve real-world problems.",
    description1:
      "Gained hands-on experience in the full model development lifecycle, including deployment and evaluation.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "GROOTT Digital || UI/UX Design Intern.",
    description:
      "Contributed to two client-facing projects, improving navigation flow speed by 15%. ",
    description1:
      "Collaborated within an Agile environment, participating in daily stand-ups and sprint planning.",
    description2:
      "Maintained design consistency across more than 10 screens to align with client branding and improve usability.",
    icon: LockClosedIcon,
  },
  {
    name: "Accenture || Product Design Job Simulation.",
    description:
      "Applied UX principles to real-world scenarios through a professional product design simulation.",
    icon: ServerIcon,
  },
];

function MyExperience() {
  return (
    <div className="overflow-hidden bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Experiences :
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Diverse professional background spanning AI development, UI/UX
                design, and product simulation within Agile environments.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-400 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 h-5 w-5 text-indigo-400"
                      />
                      {feature.name}
                    </dt>{" "}
                    <br />
                    <dd className="inline">{feature.description}</dd>
                    <br />
                    <dd className="inline">{feature.description1}</dd>
                    <br />
                    <dd className="inline">{feature.description2}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src="src\assets\Bg.png"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-white/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}

export default MyExperience;
