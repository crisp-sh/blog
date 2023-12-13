import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  if (process.env.NODE_ENV === 'production') {
    return new NextResponse("This route is not available in production", { status: 403 });
  }
  const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
  const REDIRECT_URI = 'http://localhost:3000/api/spotify/callback';
  const SCOPE = 'user-read-recently-played user-read-currently-playing user-read-private user-read-email';

  const AUTH_URL = `https://accounts.spotify.com/authorize?response_type=code&client_id=${CLIENT_ID}&scope=${encodeURIComponent(SCOPE)}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;


  return NextResponse.redirect(AUTH_URL);
}