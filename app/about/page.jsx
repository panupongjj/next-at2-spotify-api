import HeroSection from "@/components/layout/HeroSection";
//import singletonArtistList from '@/lib/artistsController';
export const metadata = {
  title: "About Us",
  description: "About Us page for the music app",
};

async function AboutPage() {
  const aboutUsDescription = `
      Welcome to Jay Down Under - TOP 10 artist on Spotify  !

      This website is a project developed as part of Assessment Task 2 for the Holmesglen Institute curriculum. Built using Next.js with the App Router architecture, it demonstrates a practical integration of modern web technologies and external data sources.

      The core feature of this site is the integration with the Spotify Web API. We retrieve and showcase the Top 10 Artists on Spotify, along with a selection of their 10 most popular albums. While the current version uses a fixed list of top artists as a starting point, we are planning to scale this project to support dynamic artist search and browsing in the future.

      Whether you're exploring artists or learning how modern APIs work within full-stack development, this site represents a snapshot of applied learning in action.

      Stay tuned for more updates as this project evolves!
    `;
  return (
    <>
      <HeroSection
        title="About Us"
        description={aboutUsDescription}
        bgImage="/backgrounds/Top-10-2.jpg"
      />
    </>
  );
}

export default AboutPage;
