import Image from "next/image";
import Link from "@/components/ui/Link";
import { allPosts } from ".contentlayer/generated";

import PostList from "./blog/components/ui/PostList";
import Stats from "@/components/Stats";
import SectionHeader from "@/components/SectionHeader"

import { ArrowUpRightIcon } from "@heroicons/react/20/solid";
import Avatar from "@/public/avatar.png";

import Filter from "bad-words";
import React from "react";
import { useTheme } from "next-themes"

import { bodoni, inter, redrose } from "@/fonts";
import clsx from "clsx";

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
      <div className="flex animate-in flex-col gap-8">
        <div>
          {/* <h1 className={`${bodoni.className} animate-in text-3xl font-semibold text-primary`}> */}
          <SectionHeader heading="Sellers H. Crisp">
            
          </SectionHeader>

          <p
            className="animate-in text-secondary"
            style={{ "--index": 1 } as React.CSSProperties}
          >
            People, places, and technology.
          </p>
        </div>
        <div
          className="flex animate-in flex-col gap-6 text-secondary md:flex-row md:items-center"
          style={{ "--index": 1 } as React.CSSProperties}
        >
          <Image
            src={Avatar}
            width={85}
            height={85}
            alt="avatar"
            className="rounded-full bg-secondary animate-in"
          />
          <Stats />
        </div>
        <p
          className="max-w-lg animate-in text-primary"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          Hi, I&apos;m Sellers, a 22 year-old software engineer, turned political scientist, turned
          entrepreneur, who loves building cool things with cool tools.
        </p>
        <ul
          className="animated-list flex animate-in flex-col gap-2 text-secondary md:flex-row md:gap-6"
          style={{ "--index": 2 } as React.CSSProperties}
        >
          <li className="transition-opacity">
            <Link
              href="mailto:s@crisp.sh"
              className="flex items-center gap-2 no-underline"
            >
              <ArrowUpRightIcon className="h-5 w-5" />
              <span>Email me</span>
            </Link>
          </li>
          <li className="transition-opacity">
            <Link
              href="/links"
              className="flex items-center gap-2 no-underline"
            >
              <ArrowUpRightIcon className="h-5 w-5" />
              <span>More ways to connect</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="" style={{ "--index": 3 } as React.CSSProperties}>
        <hr className="h-px border-0 bg-tertiary" />
      </div>

      <div
        className="flex animate-in flex-col gap-6"
        style={{ "--index": 4 } as React.CSSProperties}
      >
        <h2 className="text-secondary font-normal">Recent Posts</h2>
        <PostList posts={posts} />
        <Link
          href="/blog"
          className="text-secondary underline underline-offset-4 hover:text-primary"
        >
          See All
        </Link>
      </div>
    </div>
  );
}
