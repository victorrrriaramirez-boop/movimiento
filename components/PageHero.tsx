"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.055, 1.015]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.82, 1], [1, 0.98, 0]);

  return (
    <section ref={ref} className="pageHero">
      <div className="pageHeroMedia">
        <motion.div
          className="pageHeroMotionLayer"
          style={{
            y: reduceMotion ? 0 : imageY,
            scale: reduceMotion ? 1 : imageScale
          }}
        >
          <Image
            src={selected.src}
            alt={selected.alt}
            fill
            quality={90}
            sizes="100vw"
            placeholder="blur"
            blurDataURL={selected.blurDataURL}
            className="coverImage pageHeroPhoto"
          />
        </motion.div>
      </div>
      <div className="pageHeroShade" />
      <motion.div
        className="pageHeroContent container"
        style={{
          y: reduceMotion ? 0 : copyY,
          opacity: reduceMotion ? 1 : copyOpacity
        }}
      >
        <span className="eyebrow lightText">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{intro}</p>
      </motion.div>
    </section>
  );
}
