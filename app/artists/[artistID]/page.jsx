
import HeroSection from '@/components/layout/HeroSection';
import { notFound } from 'next/navigation';
//Only allow paths returned by generateStaticParams() — anything else should 404
export const dynamicParams = false;


export const metadata = {
  title: "Artist's Album Page",
  description: "Artist's Album Page",
};

const getAlbum = async (artistID) => {
    const response = await fetch(`${process.env.SERVER_NAME}/api/spotify/getAlbum/${artistID}`, { cache: 'no-store' });
    const data = await response.json();
    if(!response.ok){
      throw new Error(`Failed to fetch posts - Error ${data.status}: ${data.message}`)
    }
    return data;
}


export async function generateStaticParams() {
    const response = await fetch(`${process.env.SERVER_NAME}/api/spotify/getArtistID`, { cache: 'no-store' });
    const data = await response.json();
    if(!response.ok){
      throw new Error(`Failed to fetch posts - Error ${data.status}: ${data.message}`)
    }
    //return data.arrArtistList.map(id => ({ artistID: id }));
    return Object.keys(data.artistObject).map(id => ({artistID: id}));
    
}

async function AlbumPage({params}){
  const { artistID } = await params ;
  // console.log("--------- artistID ------------");
  // console.log("artistID is:",artistID);
  // console.log("type of artistID:", typeof artistID);
  // console.log("----------------------------------");
  let albumList;
  try{
       albumList = await getAlbum(artistID);
  }
  catch (error) {
    console.error("Invalid artistID or fetch failed:", error);
    notFound();
  }
  albumList = albumList.playlists;
  //console.log(albumList);
  
  return(
  <>
    <HeroSection 
      title='PlayListPage'
      description='Explore the album of artist'
      bgImage="/backgrounds/musicList.webp"
    />

    <div>
      <h1>Artists</h1>
      <p>Search for artists on Spotify</p>
      <p></p>
      <ul>
        {Object.entries(albumList).map(([id, albumList]) => (
          <li key={id}>
          <p>Name : {albumList.name}</p>
          <p>ID: {id}</p>
          <p>
            <a href={albumList.external_urls.spotify} target="_blank" rel="noopener noreferrer">
              Listen on Spotify
            </a>
          </p>
          <img src={albumList.images[1]?.url} alt={albumList.name} width="160" />
        </li>
          ))}
      </ul>
    </div>
  </>
  )
}
export default AlbumPage

