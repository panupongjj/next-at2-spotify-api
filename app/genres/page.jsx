
import HeroSection from '@/components/layout/HeroSection';
export const metadata = {
  title: "Jay’s Page API",
  description: "Jay's personal profile page",
};



const getData = async () => {

    const response = await fetch(`${process.env.SERVER_NAME}/api/spotify/getGenres`, { cache: 'no-store' });
    const data = await response.json();
    if(!response.ok){
      throw new Error(`Failed to fetch posts - Error ${response.status}: ${data.message}`)

    }
    return data;
}


async function WorldNewsPage() {
   const data = await getData();
   //console.log(data.genres.categories.items);
   
   return(
    <>
      <HeroSection 
        title='Globe' 
        description='Catch up on all the global news via BBC News'
        bgImage="/backgrounds/musicList.webp"
      />
      <h1> API DATA </h1>
      
      { data.genres.categories.items.map((genre) => (
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

// SERVER SIDE GENERATION (snippet: "ngss")

export default WorldNewsPage