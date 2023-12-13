import { NextRequest, NextResponse } from 'next/server';
import fetch from 'node-fetch';
import { URL } from 'url';

export async function GET(req: NextRequest) {
  const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
  const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
  const REDIRECT_URI = 'http://localhost:3000/api/spotify/callback'; // Replace with your callback URI

  const url = new URL(req.nextUrl.toString());
  const code = url.searchParams.get('code');

  if (process.env.NODE_ENV === 'production') {
    return new NextResponse("This route is not available in production", { status: 403 });
  }

  if (!code) {
    return NextResponse.redirect('/'); // Redirect to home page if code is not present
  }

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64')
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: REDIRECT_URI
    })
  });

  const data: any = await response.json();

  console.log({
    accessToken: data.access_token,
    refreshToken: data.refresh_token
  });
}