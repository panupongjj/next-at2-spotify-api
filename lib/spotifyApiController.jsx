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
   
   const _getGenres = async (token) => {
      // Fetch the genres from the Spotify API
      const limit = 10;                            
      const response = await fetch(`https://api.spotify.com/v1/browse/categories?limit=${limit}&locale=en_AU`, {
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

   return {
      getToken() {
         return _getToken();
      }, 
      getGenres(token) {
         return _getGenres(token);
      }
   }

})();

export default spotifyApiController;