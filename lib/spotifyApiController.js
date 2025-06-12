//Closure: SpotifyApi

const spotifyApiController = (function () {
  //private methods
  const _getToken = async () => {
    // Fetch the token from the server
    const body = new URLSearchParams();
    body.append("grant_type", "client_credentials");
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization:
          "Basic " +
          new Buffer.from(
            process.env.C_ID + ":" + process.env.C_SECRET
          ).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body.toString(),
    });
    if (!response.ok) {
      throw new Error("Failed to fetch Spotify token");
    }
    const data = await response.json();
    return data.access_token;
  };

  const _getArtistId = async (token, artistName) => {
    // Fetch the artist from the Spotify API search endpoint
    const url = `https://api.spotify.com/v1/search?q=${artistName}&type=artist&limit=1`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch Spotify genres");
    }
    const data = await response.json();
    //console.log(data.artists.items[0]);

    return data.artists.items[0];
  };

  const _getAlbum = async (token, artistID) => {
    // Fetch the genres from the Spotify API
    const limit = 10;
    const market = "AU";
    const url = `https://api.spotify.com/v1/artists/${artistID}/albums?include_groups=album,single,appears_on&market=${market}&limit=${limit}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch Spotify genres");
    }
    const data = await response.json();

    return data.items;
  };

  return {
    getToken() {
      return _getToken();
    },
    getArtistId(token, artistName) {
      return _getArtistId(token, artistName);
    },
    getAlbum(token, artistID) {
      return _getAlbum(token, artistID);
    },
  };
})();

export default spotifyApiController;
