class Spotify {
  private CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
  private CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
  private REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

  private BASIC = Buffer.from(`${this.CLIENT_ID}:${this.CLIENT_SECRET}`).toString('base64');
  private NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing';
  private LAST_PLAYED_ENDPOINT = 'https://api.spotify.com/v1/me/player/recently-played';
  private TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token';

  private async getAccessToken() {
    if (!this.REFRESH_TOKEN) {
      throw new Error('No refresh token available');
    }

    const response = await fetch(this.TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${this.BASIC}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: this.REFRESH_TOKEN
      })
    });

    const data = await response.json();

    return data.access_token as string;
  }

  public async getNowPlaying() {
    const accessToken = await this.getAccessToken()

    const response = await fetch(this.NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    })

    if (response.status === 204) {
      return {
        status: response.status
      }
    }

    try {
      const song = await response.json()

      return {
        status: response.status,
        data: song
      }
    } catch {
      return {
        status: response.status
      }
    }
  }

  public async getLastPlayed() {
    try {
      const accessToken = await this.getAccessToken()

      const response = await fetch(this.LAST_PLAYED_ENDPOINT, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      })

      if (!response.ok) {
        const message = `An error has occurred: ${response.status}`;
        console.error(message);
        return {
          status: response.status,
          message: message
        }
      }

      const song = await response.json()

      return {
        status: response.status,
        data: song.items[0].track,
      }
    } catch (error: any) {
      console.error(error);
      return {
        status: 500,
        message: error.message
      }
    }
  }
}

export default Spotify;