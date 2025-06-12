import HeroSection from "@/components/layout/HeroSection";
//import singletonArtistList from "@/lib/artistsController";
export const metadata = {
  title: "Contact us ",
  description: "Contact us for any queries or feedback",
};

async function ContactPage() {
  //singletonArtistList.generateArtistList()
  //const artistsObject = singletonArtistList.getArtistListsObject();
  //const getArtistIdList = singletonArtistList.getArtistIdList();

  return (
    <>
      <HeroSection
        title="Contact Us"
        description="Contact us for any queries or feedback"
        bgImage="/backgrounds/spotifycontact.jpg"
      />
    </>
  );
}

export default ContactPage;
