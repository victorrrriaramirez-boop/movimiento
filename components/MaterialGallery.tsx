"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { materialGallery } from "@/lib/content";

const easing = [0.22, 1, 0.36, 1] as const;

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
            <motion.figure
              key={item.label}
              className={`materialCard ${item.className}`}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: reduceMotion ? 0 : index * 0.08, ease: easing }}
            >
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                quality={90}
                sizes={item.className === "galleryWide"
                  ? "(max-width: 767px) 100vw, (max-width: 1199px) 58vw, 760px"
                  : item.className === "galleryMedium"
                    ? "(max-width: 767px) 100vw, (max-width: 1199px) 42vw, 560px"
                    : "(max-width: 767px) 100vw, (max-width: 1199px) 33vw, 440px"}
                placeholder="blur"
                blurDataURL={item.image.blurDataURL}
                className="coverImage materialImage"
              />
              <figcaption>{item.label}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
