//import { Fragment } from 'react';
import HeroSection from '@/components/layout/HeroSection/HeroSection';
//import ArticlesList from '@/components/features/articles/ArticlesList';
export const metadata = {
  title: "Spotify API",
  description: "Assessment Task 2 - API",
  icons: {
  icon: '/images/favicon.ico',
  },
};
function HomePage({articles}) {
  return (
    <>
      <HeroSection 
        title='Under development' 
        description='lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        bgImage="/backgrounds/musicList.webp"
      />
    </>
    
  )
}

// // STATIC SITE GENERATION (snippet: "ngsp")
// export const getStaticProps = async () => {
//   // Fetch data from Internal API ("Code News")
//   const response = await fetch(`${process.env.SERVER_NAME}/api/news`);
//   const data = await response.json();

//   if(!response.ok){
//     throw new Error(`Failed to fetch posts - Error ${response.status}: ${data.message}`)
//   }

//   // CHECKER FOR INTERNAL DATA:
//   console.log(data);

//   // Returned data as props & ISR functionality
//   return {
//     props: {
//       articles: data
//     },
//     revalidate: 60 * 60
//   };
// };

export default HomePage;