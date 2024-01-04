import Image from "next/image";
import { Metadata } from "next";

import Link from "@/components/ui/Link";
import Section from "@/components/Section";
import ConnectLinks from "../../components/ConnectLinks";
// import Workplaces from "./components/Workplaces";
// import Gallery from "./components/Gallery";

// import hinesLogo from "public/work/hines-logo.jpeg";
// import perishipLogo from "public/work/periship-logo.jpeg";
// import camsLogo from "public/work/cams-logo.png";
// import uhdLogo from "public/work/uhd.png";

export const metadata: Metadata = {
  title: "About | S.H. Crisp",
  description:
    "I'm a senior at the University of Georgia, stuying a range of topics affected by international politics.",
};

export default function About() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div style={{ "--index": 1 } as React.CSSProperties}>
        <h1 className="font-bold tracking-tight text-9xl">
          About Me
        </h1>
        <p
          className="text-secondary animate-in"
        >
          Let&apos;s get personal.
        </p>
      </div>
      {/* {Perlin} */}
      <div
        className="flex flex-col gap-16 animate-in md:gap-24"
        style={{ "--index": 2 } as React.CSSProperties}
      >
        <Section heading="Summary" headingAlignment="left">
          <div className="flex flex-col gap-6">
            <p>
              I&apos;m currently a senior at the{" "}
              <Link
                className="underline"
                href="https://spia.uga.edu/"
              >
                University of Georgia
              </Link>, studying a range of topics affected by international politics.
              Cyber security, economics, human rights, and climate change pique my interest the most.
              I hope to address any one of these issues in my future career.
            </p>
            <p>
              I&apos;m also a software engineer with a passion for building things, like this very website.
              For front-end development, I prefer using Next, Tailwind, and Framer Motion within TypeScript.

            </p>
          </div>
        </Section>

        <Section heading="Connect" headingAlignment="left">
          <div className="flex flex-col w-full gap-8">
            <p>
              Have a question or just want to chat? Feel free to{" "}
              <Link href="mailto:s@crisp.sh" >
                email me
              </Link>
              .
            </p>
            <ul className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-2 animated-list">
              {ConnectLinks.map((link) => (
                <li className="transition-opacity col-span-1" key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-opacity no-underline w-full border  p-4 border-primary inline-grid"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{link.icon}</span>
                      {link.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 ml-auto text-secondary"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section heading="Work" headingAlignment="left">
          <div className="flex flex-col w-full gap-8">
            <p>
              {new Date().getFullYear() - 2015}+ years of programming under my belt.
            </p>
            <p>
              Under construction!
            </p>
            {/* <Workplaces items={workplaces} /> */}
          </div>
        </Section>
      </div>
    </div>
  );
}

// const workplaces = [
//   {
//     title: "Full Stack Engineer",
//     company: "Me",
//     time: "2022 -",
//     imageSrc: hinesLogo,
//     // link: "https://hines.com",
//   },
//   {
//     title: "Software Engineer",
//     company: "Myself",
//     time: "2021 - 2022",
//     imageSrc: perishipLogo,
//     // link: "https://peripharma.com/",
//   },
//   {
//     title: "Python Developer",
//     company: "&",
//     time: "2019 - 2020",
//     imageSrc: camsLogo,
//     // link: "https://camstex.com",
//   },
//   {
//     title: "Coding Camp Instructor",
//     company: "I",
//     time: "2019",
//     imageSrc: uhdLogo,
//     // link: "https://www.uhd.edu/",
//   },
// ];