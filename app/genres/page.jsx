
import HeroSection from '@/components/layout/HeroSection';
export const metadata = {
  title: "Jay’s Page Spotify API",
  description: "Jay's personal profile page",
};



const getGenres = async () => {

    const response = await fetch(`${process.env.SERVER_NAME}/api/spotify/getGenres`, { cache: 'no-store' });
    const data = await response.json();
    //console.log(data);
    
    if(!response.ok){
      throw new Error(`Failed to fetch posts - Error ${data.status}: ${data.message}`)

    }
    return data.genres;
}


async function genresPage() {
   const data = await getGenres();
   //console.log(data.genres.categories.items);
   return(
    <>
      <HeroSection 
        title='GENRES'
        description='Explore the world of music genres'
        bgImage="/backgrounds/musicList.webp"
      />
      <h1> API DATA </h1>
      
      { data.map((genre) => (
        <div key={genre.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ textAlign: 'center' }}>{genre.name}</h2>
          <h2>{genre.name} : ID = {genre.id} </h2>
          <img src={genre.icons[0].url} alt={genre.name} width="100" height="100" />
        </div>
      ))
      }
      {/* {worldArticles.length > 0 && <ArticlesList articles={worldArticles} />} */}
    </>
   )
    
  
}

export default genresPage