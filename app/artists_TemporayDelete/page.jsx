
import HeroSection from '@/components/layout/HeroSection';

export const metadata = {
  title: "TOP 10 Artists on Spotify ",
  description: "Search for top 10 artists on Spotify",
};

async function getData() {
  const response = await fetch(`${process.env.SERVER_NAME}/api/spotify/getArtistID`, { cache: 'no-store' });
  const data = await response.json();
  return data.artistObject;
}


async function artistsPage() {
  //await singletonArtistList.generateArtistList();
  //singletonArtistList.generateArtistList()
  const artistsObject = await getData();
  //const artistsObject = singletonArtistList.getArtistListsObject();
  //const getArtistIdList = singletonArtistList.getArtistIdList();
  //console.log(artistsObject);
  
  return (
    <>
      <HeroSection 
        title='TOP 10 Spotify Artists'
        description='Search for Top 10 artists on Spotify'
        bgImage="/backgrounds/musicList.webp"
        artistsObject={artistsObject}
      />
      {/* <div>
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

            <a href={"/artists/" + id} target="_self" rel="noopener noreferrer">
                 <img src={artists.images[1]?.url} alt={artists.name} width="160" />
            </a>
           
          </li>
           ))}
        </ul>
      </div> */}
    </>

  );
}

export default artistsPage;