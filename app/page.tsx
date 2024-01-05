import Image from "next/image";
import Link from "@/components/ui/Link";
import { allPosts } from ".contentlayer/generated";

import Stats from "@/components/Stats";
import Workplaces from "./about/components/Workplaces";

import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
// import Avatar from "@/public/avatar.png";

import Filter from "bad-words";
import React from "react";
import { useTheme } from "next-themes"

import { bodoni, inter, redrose } from "@/fonts";
import clsx from "clsx";
import Section from "@/components/Section";
import ConnectLinks from "@/components/ConnectLinks";
import Skills from "@/components/Skills";

import ugaLogo from "public/education/uga.png";
import springboardLogo from "public/education/springboard.png";
import auburnLogo from "public/education/auburn.png";

export default async function Home() {
  const posts = allPosts
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    // 3 most recent
    .filter((_, i) => i < 3);

  return (
    <div className="flex flex-col gap-8 md:gap-16">
      {/* Page Heading */}
      <div className="flex animate-in flex-col gap-8">
        <div className="max-lg:hidden">
          <h1
            style={{ "--index": 1 } as React.CSSProperties}
            className={`${bodoni.className} animate-in text-4xl font-semibold text-primary`}
          >
            Sellers H. Crisp
          </h1>
          <p
            className="animate-in text-secondary"
            style={{ "--index": 2 } as React.CSSProperties}
          >
            People, places, and technology.
          </p>
        </div>
        <div
          className="flex animate-in flex-col gap-16 text-secondary md:flex-row md:items-center"
          style={{ "--index": 3 } as React.CSSProperties}
        >
          {/* <Image
            src={Avatar}
            width={85}
            height={85}
            alt="avatar"
            className="rounded-full bg-secondary animate-in"
          /> */}
          <Stats />
        </div>
      </div>
      {/* Summary */}
      <div
        className="flex flex-col gap-16 animate-in md:gap-24"
        style={{ "--index": 5 } as React.CSSProperties}
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
          </div>
        </Section>
      </div>

      {/* Experience */}
      <div
        className="flex animate-in flex-col gap-6"
        style={{ "--index": 6 } as React.CSSProperties}
      >
        <Section heading="Experience" headingAlignment="left">
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

      {/* Education */}
      <div
        className="flex animate-in flex-col gap-6"
        style={{ "--index": 7 } as React.CSSProperties}
      >
        <Section heading="Education" headingAlignment="left">
          <div className="flex flex-col w-full gap-8">
            <Workplaces items={education} />
          </div>
        </Section>
      </div>

      {/* Connect */}
      <div
        className="flex animate-in flex-col gap-6"
        style={{ "--index": 8 } as React.CSSProperties}
      >
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
      </div>
    </div>
  );
}

const education = [
  {
    title: "University of Georgia",
    company: "International Affairs",
    imageSrc: ugaLogo,
    time: "Expected 2024",
    link: "",
    bullets: [
      "Cyber Security",
      "Economics",
      "Human Rights",
      "Climate Change",
    ]
  },
  {
    title: "Springboard",
    company: "Software Engineering Bootcamp Alumni",
    imageSrc: springboardLogo,
    time: "2021",
    link: "",
    bullets: [
      "Cyber Security",
      "Economics",
      "Human Rights",
      "Climate Change",
    ]
  },
  {
    title: "Auburn University",
    company: "Biosystems Engineering",
    imageSrc: auburnLogo,
    time: "2019 - 2020",
    bullets: [
      "Cyber Security",
      "Economics",
      "Human Rights",
      "Climate Change",
    ]
  }
];