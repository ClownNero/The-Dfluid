import { Profile, profiles, shuffleArray } from "@/utils/shuffle";
import ProfileCard from "@/components/profile/profileCard";

export default function ProfileList() {
  const shuffledProfiles: Profile[] = shuffleArray([...profiles]);

  return (
    <section className="flex flex-row justify-start items-start gap-[20px] mb-[110px] mt-[34px] mx-[80px]">
      {shuffledProfiles.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
    </section>
  );
}
