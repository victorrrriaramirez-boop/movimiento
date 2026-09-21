import Image from "next/image";
import { images } from "@/lib/content";

const imageMap = {
  services: images.craft,
  projects: images.after,
  about: images.travertine,
  contact: images.hero
} as const;

export function PageHero({
  eyebrow,
  title,
  intro,
  image = "projects"
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: keyof typeof imageMap;
}) {
  const selected = imageMap[image];
  return (
    <section className="pageHero">
      <div className="pageHeroMedia">
        <Image src={selected.src} alt={selected.alt} fill priority sizes="100vw" className="coverImage" />
      </div>
      <div className="pageHeroShade" />
      <div className="pageHeroContent container">
        <span className="eyebrow lightText">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
    </section>
  );
}
