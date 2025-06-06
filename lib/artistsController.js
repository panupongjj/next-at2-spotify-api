import spotifyApiController from "./spotifyApiController";

let counter = 0;
let artistListsObj =  new Object();
const artistLists = process.env.A_LIST;
const arrArtistList = artistLists.split('@');
const _getArtistID = async (token,artistName) => {   
   // Fetch 
   
   const artist = await spotifyApiController.getArtistId(token,artistName);
   
   
   artistListsObj[artist.id] = artist;
   //console.log(artistListsObj);
}
const _getArtistIdListForStaticPath = async () => {
   
   const arrArtistIdList = [];
   try {

      counter++;
      console.log('@@@@ lib = artistsController.js @@@@ Counter =', counter);
      const token = await spotifyApiController.getToken();
      arrArtistList.forEach(element => {
         _getArtistID(token,element);
      });
   } catch (error) {
      console.error('Error in /api/spotify/getPlaylist:', error);
      //return NextResponse.json({ error: error.message }, { status: 500 });
   }
}


const artistController = {
   generateArtistList : () => _getArtistIdListForStaticPath(),
   getArtistListsObject : () => artistListsObj
}

const singletonArtistList2 = Object.freeze(artistController);

export default singletonArtistList2;