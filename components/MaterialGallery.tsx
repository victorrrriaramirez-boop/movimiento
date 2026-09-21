"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { materialGallery } from "@/lib/content";

type GalleryItem = (typeof materialGallery)[number];

function MaterialCard({ item }: { item: GalleryItem }) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 96%", "end 14%"]
  });

  const cardOpacity = useTransform(scrollYProgress, [0, 0.17, 0.34], [0, 0.72, 1]);
  const cardY = useTransform(scrollYProgress, [0, 0.34], [34, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["1.5%", "-1.5%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.055, 1.015, 1.025]);

  const sizes = item.className === "galleryWide"
    ? "(max-width: 767px) 100vw, (max-width: 1199px) 58vw, 760px"
    : item.className === "galleryMedium"
      ? "(max-width: 767px) 100vw, (max-width: 1199px) 42vw, 560px"
      : "(max-width: 767px) 100vw, (max-width: 1199px) 33vw, 440px";

  return (
    <motion.figure
      ref={ref}
      className={`materialCard ${item.className}`}
      style={{
        opacity: reduceMotion ? 1 : cardOpacity,
        y: reduceMotion ? 0 : cardY
      }}
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
          {materialGallery.map((item) => <MaterialCard key={item.label} item={item} />)}
        </div>
      </div>
    </section>
  );
}
