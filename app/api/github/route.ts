import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const username = searchParams.get('username');

  if (!username) {
    return new Response("Please provide a username", { status: 200 });
  }

  try {
    const url = `https://api.github.com/users/sellerscrisp/repos?per_page=100`;
    const response = await fetch(url);
    const data = await response.json();

    // Count the number of repositories
    const repoCount = data.length;

    return Response.json({ repoCount });
  } catch (err) {
    console.error(err);
    return new Response(`Something went wrong: ${err}`, { status: 500 });
  }
}