import HeroSection from "@/components/layout/HeroSection";

export const metadata = {
  title: "TOP 10 Artists on Spotify ",
  description: "Search for top 10 artists on Spotify",
};

async function getData() {
  const response = await fetch(
    `${process.env.SERVER_NAME}/api/spotify/getArtistID`,
    { cache: "no-store" }
  );
  const data = await response.json();
  return data.artistObject;
}

async function HomePage() {
  //await singletonArtistList.generateArtistList();
  //singletonArtistList.generateArtistList()
  const artistsObject = await getData();
  //const artistsObject = singletonArtistList.getArtistListsObject();
  //const getArtistIdList = singletonArtistList.getArtistIdList();
  //console.log(artistsObject);

  return (
    <>
      <HeroSection
        title="TOP 10 Artists on Spotify"
        description="Search for Top 10 artists on Spotify and explore their album."
        bgImage="/backgrounds/musicList.webp"
        artistsObject={artistsObject}
      />
    </>
  );
}
export default HomePage;
