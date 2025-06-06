
import HeroSection from '@/components/layout/HeroSection';
import singletonArtistList from '@/lib/artistsController';  
export const metadata = {
  title: "About Us",
  description: "About Us page for the music app",
};


async function AboutPage() {
  return (
    <>
      <HeroSection 
        title='About Us'
        description='About Us page for the music app'
        bgImage="/backgrounds/aboutus.jpg"
      />
    </>

  );
}

export default AboutPage;