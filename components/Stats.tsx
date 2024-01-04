"use client";
import Link from "next/link";
import useSWR from "swr";
import { useTheme } from "next-themes";
import clsx from "clsx";

// import { SpotifyLogo, TrendUp, GithubLogo } from "@phosphor-icons/react";
import { CodeIcon, CursorArrowIcon, SpeakerLoudIcon, } from "@radix-ui/react-icons";

import FlipNumber from "@/components/FlipNumber";

import fetcher from "@/lib/fetcher";
import { addCommas, cleanSongTitle, getFirstArtist } from "@/lib/utils";

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

type RecentlyPlayedSong = {
  title: string;
  album: string;
  albumImageUrl: string;
  artist: string;
  songUrl: string;
  name: string;
}

export function GitHub() {
  const { data: githubData, error: githubDataError } = useSWR(
    `/api/github?username=sellerscrisp`,
    fetcher
  );

  if (githubDataError) return <div>failed to load</div>;
  return addCommas(githubData?.stars);
}

export default function Stats() {
  const [song, setSong] = useState<NowPlayingSong | RecentlyPlayedSong | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    async function fetchNowPlaying() {
      const res = await fetch('/api/spotify');
      if (!res.ok) {
        console.error('Failed to fetch now playing track');
        return;
      }

      const data: NowPlayingSong = await res.json();
      setIsPlaying(data.isPlaying);
      if (data.isPlaying) {
        setSong(data);
      } else {
        fetchRecentlyPlayed();
      }
    }

    async function fetchRecentlyPlayed() {
      const res = await fetch('/api/spotify/recently-played');
      if (!res.ok) {
        console.error('Failed to fetch recently played track');
        return;
      }

      const data: RecentlyPlayedSong = await res.json();
      setSong(data);
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
    <ul className={clsx("animated-list flex flex-col justify-center")}>
      <li className="transition-opacity mb-1">
        <Link target="_blank" className="flex gap-3 items-center no-underline" href={song?.songUrl || "#"}>
          <SpeakerLoudIcon className="text-tertiary gap-3" />
          <div>
            {isPlaying ? (
              <div>
                <span>
                  {cleanSongTitle(song?.name ?? '')}
                </span>
                <span className="text-secondary"> by </span>
                <span>{getFirstArtist(song?.artist ?? '')}</span>
              </div>
            ) : (
              <div>
                <span>
                  {cleanSongTitle(song?.name ?? '')}
                </span>
                <span className="text-secondary"> by </span>
                <span>{getFirstArtist(song?.artist ?? '')}</span>
              </div>
            )}
          </div>
        </Link>
      </li>
      <li className="transition-opacity mb-1">
        <Link
          className="flex gap-3 items-center no-underline"
          href={"https://github.com/sellerscrisp"}
        >
          <CodeIcon className="text-tertiary" />
          <div>
            <FlipNumber>
              {githubData ? addCommas(githubData?.repoCount) : "000"}
            </FlipNumber>
            <span className="text-teriary">{" "}projects</span>
          </div>
        </Link>
      </li>
      <li className="transition-opacity mb-1">
        <Link className="flex gap-3 items-center" href="/blog">
          <CursorArrowIcon className="text-tertiary" />
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
