import { Profile } from "@/utils/shuffle";
import Image from "next/image";

interface ProfileCardProps {
  profile: Profile;
}

export default function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <article className="w-[493px]">
      <Image
        className="mr-[385px] mb-[40px] object-contain"
        src={profile.image}
        alt={profile.name}
        width={108}
        height={108}
      />
      <h2 className="Text-Style-2">{profile.name}</h2>
      <p className="Text-Style-3 my-[24px]">{profile.description}</p>
      <button className="Text-Style-4">Learn more</button>
    </article>
  );
}
