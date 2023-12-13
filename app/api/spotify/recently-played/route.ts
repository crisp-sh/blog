import { NextResponse } from 'next/server'
import Spotify from '@/lib/spotify'

export const runtime = 'edge'
export const dynamic = 'force-dynamic'

const spotify = new Spotify();

export const GET = async () => {
  try {
    const response = await spotify.getLastPlayed()

    if (
      response.status === 204 ||
      response.status > 400 ||
      response?.data === null
    ) {
      console.log('Response status: ', response.status)
      return NextResponse.json({ message: 'No recently played track found' }, { status: response.status })
    }

    const song = response.data

    const name = song.name
    const artist = song.artists
      .map((_artist: { name: string }) => {
        return _artist.name
      })
      .join(', ')
    const album = song.album.name
    const albumImage = song.album.images[0].url
    const songUrl = song.external_urls.spotify

    return NextResponse.json({
      name,
      artist,
      album,
      albumImage,
      songUrl
    })
  } catch {
    return NextResponse.json(
      {
        message: 'An error occurred while fetching the last played song.'
      },
      { status: 500 }
    );
  }
};