"use client";
import Link from "next/link";
import useSWR from "swr";
import { useTheme } from "next-themes";
import clsx from "clsx";

import { FaGithub, FaSpotify } from "react-icons/fa";
import { ArrowTrendingUpIcon } from "@heroicons/react/20/solid";

import FlipNumber from "@/components/FlipNumber";
import fetcher from "@/lib/fetcher";
import { addCommas, getThemeFont } from "@/lib/utils";
import { useEffect, useState } from "react";

type NowPlayingSong = {
  isPlaying: boolean;
  title: string;
  album: string;
  albumImageUrl: string;
  artist: string;
  songUrl: string;
  name: string;
};

export function GitHub() {
  const { data: githubData, error: githubDataError } = useSWR(
    `/api/github?username=sellerscrisp`,
    fetcher
  );

  if (githubDataError) return <div>failed to load</div>;
  return addCommas(githubData?.stars);
}

export default function Stats() {
  const [nowPlaying, setNowPlaying] = useState<NowPlayingSong | null>(null);

  useEffect(() => {
    async function fetchNowPlaying() {
      const res = await fetch('/api/spotify');
      if (!res.ok) {
        console.error('Failed to fetch now playing track');
        return;
      }

      const data = await res.json();
      setNowPlaying(data);
    }

    fetchNowPlaying();
  }, []);

  const { theme } = useTheme();
  const username = "sellerscrisp";

  const { data: githubData, error: githubDataError } = useSWR(
    `/api/github?username=${username}`,
    fetcher
  );
  const { data: postsData, error: postsError } = useSWR(
    `/api/prisma/hitsTotal`,
    fetcher
  );

  return (
    <ul className={clsx("animated-list", getThemeFont(theme))}>
      <li className="transition-opacity mb-1">
        <Link target="_blank" className="flex gap-3 items-center no-underline" href={nowPlaying?.songUrl || "#"}>
          {/* <FaSpotify className="text-xl" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-music" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M13 17a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M9 17v-13h10v13" /><path d="M9 8h10" /></svg>
          <div>
            {nowPlaying?.isPlaying ? (
              <div>
                <span>
                  {nowPlaying.name}
                </span>
                <span className="text-tertiary"> by </span>
                <span>{nowPlaying.artist}</span>
              </div>
            ) : (
              <span>Not Playing</span>
            )}
          </div>
        </Link>
      </li>
      <li className="transition-opacity mb-1">
        <Link
          className="flex gap-3 items-center no-underline"
          href={"https://github.com/sellerscrisp"}
        >
          {/* <FaGithub className="text-xl" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
          <div>
            <FlipNumber>
              {githubData ? addCommas(githubData?.repoCount) : "000"}
            </FlipNumber>
            <span className="text-secondary"> projects</span>
          </div>
        </Link>
      </li>
      <li className="transition-opacity mb-1">
        <Link className="flex gap-3 items-center" href="/blog">
          {/* <ArrowTrendingUpIcon className="w-5 h-5" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eye" width="24" height="24" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>
          <div>
            <FlipNumber>
              {postsData ? addCommas(postsData?.total) : "0,000"}
            </FlipNumber>
            <span className="text-secondary"> website views</span>
          </div>
        </Link>
      </li>
    </ul>
  );
}
