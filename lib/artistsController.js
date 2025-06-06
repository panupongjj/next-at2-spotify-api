import spotifyApiController from "./spotifyApiController";

let artistListsObj =  new Object();
let artistIdList = [];
let aaaaa = "sssssssssssssssssssss"
const artistController = (function() {
   //private methods
   const artistLists = process.env.A_LIST;
   const arrArtistList = artistLists.split('@');
   const _getArtistID = async (token,artistName) => {   
      // Fetch 
      const artist = await spotifyApiController.getArtistId(token,artistName);
      artistListsObj[artist.id] = artist;
      artistIdList.push(artist.id);
   }
   const _getArtistIdListForStaticPath = async () => {
      const arrArtistIdList = [];
      try {
         console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
         //console.log("arrArtistList:", arrArtistList);
         const token = await spotifyApiController.getToken();
         arrArtistList.forEach(element => {
           _getArtistID(token,element);
         });
      } catch (error) {
         console.error('Error in /api/spotify/getPlaylist:', error);
         //return NextResponse.json({ error: error.message }, { status: 500 });
      }
   }
   return {
      generateArtistObjectForStaticPath() {
         return _getArtistIdListForStaticPath();
      }, 
      getArtistListObject(){
         return artistListsObj;
      },
      getDummy(){
         return aaaaa;
      }
   }
})();

const singletonArtistList = Object.freeze(artistController);

export default singletonArtistList;