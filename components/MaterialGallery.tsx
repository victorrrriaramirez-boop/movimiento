"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { materialGallery } from "@/lib/content";

const easing = [0.22, 1, 0.36, 1] as const;

type GalleryItem = (typeof materialGallery)[number];

function MaterialCard({ item, index, reduceMotion }: { item: GalleryItem; index: number; reduceMotion: boolean | null }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-2%", "2%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.045, 1.015, 1.035]);

  const sizes = item.className === "galleryWide"
    ? "(max-width: 767px) 100vw, (max-width: 1199px) 58vw, 760px"
    : item.className === "galleryMedium"
      ? "(max-width: 767px) 100vw, (max-width: 1199px) 42vw, 560px"
      : "(max-width: 767px) 100vw, (max-width: 1199px) 33vw, 440px";

  return (
    <motion.figure
      ref={ref}
      className={`materialCard ${item.className}`}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.85, delay: reduceMotion ? 0 : index * 0.07, ease: easing }}
    >
      <motion.div
        className="materialMotionLayer"
        style={{
          y: reduceMotion ? 0 : imageY,
          scale: reduceMotion ? 1 : imageScale
        }}
      >
        <Image
          src={item.image.src}
          alt={item.image.alt}
          fill
          quality={90}
          sizes={sizes}
          placeholder="blur"
          blurDataURL={item.image.blurDataURL}
          className="coverImage materialImage"
        />
      </motion.div>
      <figcaption>{item.label}</figcaption>
    </motion.figure>
  );
}

export function MaterialGallery({ compact = false }: { compact?: boolean }) {
  const reduceMotion = useReducedMotion();

  return (
    <section className={compact ? "materialsSection compact" : "materialsSection"} aria-labelledby="materials-title">
      <div className="container">
        <div className="sectionHeadingSplit">
          <div>
            <span className="eyebrow">Detalle y Textura</span>
            <h2 id="materials-title">Materialidad Tangible</h2>
          </div>
          <p>
            Cada encuentro entre materiales se diseña sin solapes ni molduras decorativas: pura honestidad constructiva con tolerancias de medio milímetro.
          </p>
        </div>
        <div className="materialGrid">
          {materialGallery.map((item, index) => (
            <MaterialCard key={item.label} item={item} index={index} reduceMotion={reduceMotion} />
          ))}
        </div>
      </div>
    </section>
  );
}
