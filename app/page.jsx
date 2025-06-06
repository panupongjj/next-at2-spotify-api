//import { Fragment } from 'react';
import HeroSection from '@/components/layout/HeroSection/HeroSection';
//import ArticlesList from '@/components/features/articles/ArticlesList';
import singletonArtistList from '@/lib/artistsController';
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
        bgImage="/backgrounds/spotify-adds.webp"
      />
    </>
  )
}

export default HomePage;