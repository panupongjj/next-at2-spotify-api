
import HeroSection from '@/components/layout/HeroSection/HeroSection';
export const metadata = {
  title: "Jay’s Page",
  description: "Jay's personal profile page",
};


export default function NextDoc() {
  return (
    <>
      <HeroSection 
        title='Under development' 
        description='lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        bgImage="/backgrounds/spotify-adds.webp"
      />
    </>
  );
}