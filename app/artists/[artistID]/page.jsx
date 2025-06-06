
import HeroSection from '@/components/layout/HeroSection';
export const metadata = {
  title: "Artist's Album Page",
  description: "Artist's Album Page",
};

const getAlbum = async (artistID) => {
    const response = await fetch(`${process.env.SERVER_NAME}/api/spotify/getAlbum/${artistID}`, { cache: 'no-store' });
    const data = await response.json();
    //console.log(data);
    if(!response.ok){
      throw new Error(`Failed to fetch posts - Error ${data.status}: ${data.message}`)
    }
    return data.albums;
}
export async function generateStaticParams() {
  console.log(">>>>>>>>>>>>>------------ generateStaticParams");
  console.log("artistID is:", artistID);
  console.log("type of artistID:", typeof artistID);
  const posts = await getAlbum(artistID);
  return posts.map(post => ({ albumID: post.id }))
}

async function AlbumPage({params}){
  const { artistID } = params ;
  console.log("--------- artistID ------------");
  console.log("artistID is:",artistID);
  console.log("type of artistID:", typeof artistID);
  console.log("----------------------------------");
  const data = await getAlbum(artistID);
  //console.log(data.json());
  return(
  <>
    <HeroSection 
      title='PlayListPage'
      description='Explore the world of music genres'
      bgImage="/backgrounds/musicList.webp"
    />
    <h1>Album ID: {params.playlistID}</h1>
  </>
  )
}
export default AlbumPage

