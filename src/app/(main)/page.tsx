import CardSection from "@/components/cardSection";
import FullBleedImage from "@/components/fullBleedImage";
import Header from "@/components/header";
import ProfileList from "@/components/profile/profileList";

export default async function Home() {
  return (
    <>
      {/* Hedaer*/}
      <Header />
      {/* Section-1 */}
      <ProfileList />
      {/* Section-2 */}
      <FullBleedImage />
      {/* Section-3*/}
      <CardSection />
    </>
  );
}
