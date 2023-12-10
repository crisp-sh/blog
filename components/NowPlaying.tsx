"use client"
import React, { useState, useEffect } from 'react';
import Link from "next/link";
import Image from "next/image";
import { FaSpotify } from "react-icons/fa";

import Halo from "./ui/Halo";
// import getLastPlayed from "@/lib/spotify";

// Define a type for your song data, adjust as per your actual data structure
type SongData = {
  is_playing: boolean;
  item?: SpotifyTrack;
  items?: { track: SpotifyTrack }[];
};

type SpotifyTrack = {
  name: string;
  artists: { name: string }[];
  external_urls: { spotify: string };
  album: {
    images: { url: string }[];
  };
  preview_url: string;
};

export default function NowPlaying() {
  const [song, setSong] = useState<SongData | null>(null);

  useEffect(() => {
    async function fetchSong() {
      const response = await getLastPlayed();
      console.log(response);
      if (response?.data) {
        setSong(response.data);
      }
    }

    fetchSong();
  }, []);

  if (!song) {
    return <div>Loading...</div>;
  }

  const recent = song.is_playing && song.item ? song.item : song.items && song.items.length > 0 ? song.items[0].track : null;

  if (!recent) {
    return <div>No recent tracks found.</div>;
  }

  const track = {
    title: recent.name,
    artist: recent.artists.map((_artist) => _artist.name).join(", "),
    songUrl: recent.external_urls.spotify,
    coverArt: recent.album.images[0].url,
    previewUrl: recent.preview_url,
  };

  return (
    <Halo strength={5}>
      <Link
        className="animate-in flex bg-tertiary overflow-clip p-4 gap-4 md:gap-6 md:p-6 items-center no-underline border border-primary w-full relative shadow-inner"
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
      </Link>
    </Halo>
  );
}