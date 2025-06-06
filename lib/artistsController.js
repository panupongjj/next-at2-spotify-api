import spotifyApiController from "./spotifyApiController";

let counter = 0;
let artistListsObj =  new Object();
let arrArtistIdList = [];

// Get the artist list from the environment variable
const artistLists = process.env.A_LIST;
const arrArtistList = artistLists.split('@');

const _getArtistID = async (token,artistName) => {   
   // Fetch 
   
   const artist = await spotifyApiController.getArtistId(token,artistName);
   artistListsObj[artist.id] = artist;
   arrArtistIdList.push(artist.id)
}
const _getArtistIdListForStaticPath = async () => {
   
   const arrArtistIdList = [];
   try {

      counter++;
      console.log('@@@@ lib = artistsController.js @@@@ Counter =', counter);
      const token = await spotifyApiController.getToken();
      await Promise.all(
         arrArtistList.map(name => _getArtistID(token, name))
      );
      //return artistListsObj;
   } catch (error) {
      console.error('Error in /api/spotify/getPlaylist:', error);
      //return NextResponse.json({ error: error.message }, { status: 500 });
   }
}

const artistController = {
   generateArtistList : () => _getArtistIdListForStaticPath(),
   getArtistIdList : () =>arrArtistIdList,
   getArtistListsObject : () => artistListsObj,
}

const singletonArtistList2 = Object.freeze(artistController);

export default singletonArtistList2;