
import HeroSection from '@/components/layout/HeroSection';
import singletonArtistList from '@/lib/artistsController';  
export const metadata = {
  title: "Artist Spotify search",
  description: "Search for artists on Spotify",
};


async function artistsPage() {
  //singletonArtistList.generateArtistList()
  const artistsObject = singletonArtistList.getArtistListsObject();
  
  return (
    <>
      <HeroSection 
        title='Artists'
        description='Search for artists on Spotify'
        bgImage="/backgrounds/musicList.webp"
      />
      <div>
        <h1>Artists</h1>
        <p>Search for artists on Spotify</p>
        <p></p>
     
        <ul>
           {Object.entries(artistsObject).map(([id, artists]) => (
            <li key={id}>
            <p>Name: {artists.name}</p>
            <p>ID: {id}</p>
            <p>
              <a href={artists.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                Listen on Spotify
              </a>
            </p>
            <img src={artists.images[1]?.url} alt={artists.name} width="160" />
          </li>
           ))}
        </ul>


      </div>
    </>

  );
}

export default artistsPage;