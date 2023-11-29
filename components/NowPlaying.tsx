import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import { useTheme } from "next-themes";
import clsx from "clsx";

import { SlSocialSpotify } from "react-icons/sl";
// import { ArrowTrendingUpIcon } from "@heroicons/react/20/solid";
import { SpotifyLogo } from "@phosphor-icons/react"

import fetcher from "@/lib/fetcher";
import getLastPlayed from "@/lib/spotify";
import { FaSpotify } from "react-icons/fa";

import Halo from "./ui/Halo";
import getNowPlaying from "@/lib/spotify";

// eslint-disable-next-line @next/next/no-async-client-component
export default async function NowPlaying() {
  const { data: song } = await getLastPlayed();

  const recent = song.is_playing ? song.item : song.items[0].track;
  const track = {
    title: recent.name,
    artist: recent.artists
      .map((_artist: { name: string }) => _artist.name)
      .shift(),
    songUrl: recent.external_urls.spotify,
    coverArt: recent.album.images[0].url,
    previewUrl: recent.preview_url,
  };

  return (
      <Halo strength={7}>
        <a
          className="animate-in flex bg-tertiary overflow-clip p-4 gap-4 md:gap-6 md:p-6 items-center no-underline border border-primary w-full relative"
          href={track.songUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Spotify Icon */}
          <div className="absolute top-1 right-1 bg-transparent	p-1 m-5">
            <FaSpotify alt="Spotify" className="h-5 w-5 shadow-xl" />
          </div>
          <div className="prose">
            <Image
              width={200}
              height={200}
              src={track.coverArt}
              alt={"Album image for the song " + track.title + " by " + track.artist}
              className="animate-in aspect-square shadow-xl"
            />
          </div>

          <div className="w-full flex flex-col gap-1 leading-tight">
            <p className="animate-in m-0 text-sm text-tertiary flex items-center gap-0.5">
              Listening to
            </p>
            <p className="animate-in text-base line-clamp-3 text-primary font-medium m-0 leading-tight">
              {track.title}
            </p>
            <div className="md:block">
              <p className="animate-in line-clamp-2 m-0 text-sm text-secondary">
                {track.artist}
              </p>
            </div>
          </div>
        </a>
      </Halo>
  );
}