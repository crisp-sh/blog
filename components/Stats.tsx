"use client";
import Link from "next/link";
import useSWR from "swr";
import { useTheme } from "next-themes";
import clsx from "clsx";

import { FaYoutube, FaGithub, FaSpotify } from "react-icons/fa";
import { ArrowTrendingUpIcon } from "@heroicons/react/20/solid";

import FlipNumber from "@/components/FlipNumber";
import fetcher from "@/lib/fetcher";
import { addCommas, getThemeFont, truncateString } from "@/lib/utils";
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
    `/api/github?username=brianruizy`,
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
          <FaSpotify className="text-xl" />
          <div>
            {nowPlaying?.isPlaying ? (
              <div>
                <span>
                  {truncateString(nowPlaying.title, 24)}
                </span>
                <span className="text-tertiary"> by </span>
                <span>{truncateString(nowPlaying.artist, 100)}</span>
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
          <FaGithub className="text-xl" />
          <div>
            <FlipNumber>
              {githubData ? addCommas(githubData?.repoCount) : "000"}
            </FlipNumber>
            <span className="text-secondary"> repositories</span>
          </div>
        </Link>
      </li>
      <li className="transition-opacity mb-1">
        <Link className="flex gap-3 items-center" href="/blog">
          <ArrowTrendingUpIcon className="w-5 h-5" />
          <div>
            <FlipNumber>
              {postsData ? addCommas(postsData?.total) : "0,000"}
            </FlipNumber>
            <span className="text-secondary"> website hits</span>
          </div>
        </Link>
      </li>
    </ul>
  );
}
