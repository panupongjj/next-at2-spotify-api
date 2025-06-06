//Closure: SpotifyApi

const spotifyApiController = (function() {
   //private methods
   const _getToken = async () =>{
      // Fetch the token from the server
      const body = new URLSearchParams();
      body.append('grant_type', 'client_credentials');
      const response = await fetch('https://accounts.spotify.com/api/token',{
         method: 'POST',
         headers: {
         'Authorization': 'Basic ' + (new Buffer.from(process.env.C_ID + ':' + process.env.C_SECRET).toString('base64')),
         'Content-Type': 'application/x-www-form-urlencoded'
         },
         body: body.toString(),
      });
      if (!response.ok) {
         throw new Error('Failed to fetch Spotify token');
      }
      const data = await response.json();
      return data.access_token;
   }

   const _getArtistId = async (token,artistName) => {
      // Fetch the artist from the Spotify API search endpoint
      const url = `https://api.spotify.com/v1/search?q=${artistName}&type=artist&limit=1`
                            
      const response = await fetch(url, {
         method: 'GET',
         headers: {
            'Authorization': 'Bearer ' + token
         }
      });

      if (!response.ok) {
         throw new Error('Failed to fetch Spotify genres');
      }
      const data = await response.json();
      //console.log(data.artists.items[0]);
      
      return data.artists.items[0];
   }

   const _getAlbum = async (token,artistID) => {
      // Fetch the genres from the Spotify API
      const limit = 10;
      const market = 'AU';
      const url = `https://api.spotify.com/v1/artists/${artistID}/albums?include_groups=album,single,appears_on&market=${market}&limit=${limit}`;                       
      const response = await fetch(url, {
         method: 'GET',
         headers: {
            'Authorization': 'Bearer ' + token
         }
      });

      if (!response.ok) {
         throw new Error('Failed to fetch Spotify genres');
      }
      const data = await response.json();
      return data;
   }


   const _getGenres = async (token) => {
      // Fetch the genres from the Spotify API
      const limit = 10;                            
      const response = await fetch(`https://api.spotify.com/v1/browse/categories?limit=${limit}&country=AU`, {
         method: 'GET',
         headers: {
            'Authorization': 'Bearer ' + token
         }
      });
      //console.log(response);
      
      if (!response.ok) {
         throw new Error('Failed to fetch Spotify genres');
      }
      const data = await response.json();
      //console.log(data.categories.items);
      return data.categories.items;
   }



   const _getPlaylistByGenre = async (token, playlistID) => {
      console.log("token is:", token);
      console.log("playlistID is:", playlistID);
      //const limit = 10;
      
      // const response = await fetch(`https://api.spotify.com/v1/browse/categories?country=AU&limit=50`, {
      // method: 'GET',
      //    headers: { 'Authorization' : 'Bearer ' + token}
      // });
      //06HL4z0CvFAxyc27GXpf02
      //6eUKZXaKkcviH0Ku9w2n3V
      const id = "06HL4z0CvFAxyc27GXpf02";
      //const response = await fetch(`https://api.spotify.com/v1/search?q=${playlistId}&type=artist&limit=1`, {
      //https://api.spotify.com/v1/tracks/11dFghVXANMlKmJXsNCbNl
      //https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF
      //const response = await fetch(`https://api.spotify.com/v1/artists/${playlistId}/top-tracks?market=AU`, {
      const response = await fetch(`https://api.spotify.com/v1/artists/${id}/albums?include_groups=album,single,appears_on&market=AU&limit=20`, {
      method: 'GET',
      headers: { 'Authorization' : 'Bearer ' + token,
                  'Content-Type': 'application/json'
               },
         
      });
      console.log(response);
      console.log(response.status, response.statusText);
      if (!response.ok) {
         throw new Error('Failed to fetch Spotify genres');
      }
      const data = await response.json()
      //console.log("type of artists:", typeof data.artists.items);
      console.log(data);
      return data;
    }


   return {
      getToken() {
         return _getToken();
      }, 
      getArtistId(token,artistName) {
         return _getArtistId(token,artistName);
      },
      getAlbum(token,artistID) {
         return _getAlbum(token,artistID);
      },
      getPlaylistByGenre(token,playlistID) {
         return _getPlaylistByGenre(token,playlistID);
      }
   }

})();

export default spotifyApiController;