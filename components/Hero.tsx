"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { images } from "@/lib/content";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -44]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.62, 1], [1, 0.9, 0]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.45, 0.72], [1, 0.7, 0]);

  return (
    <section ref={ref} className="hero" aria-labelledby="hero-title">
      <motion.div
        className="heroMedia"
        style={{ y: reduceMotion ? 0 : imageY }}
      >
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          quality={90}
          sizes="100vw"
          placeholder="blur"
          blurDataURL={images.hero.blurDataURL}
          className="coverImage heroImage"
        />
      </motion.div>

      <div className="heroOverlay" />

      <motion.div
        className="heroContent"
        style={{
          y: reduceMotion ? 0 : contentY,
          opacity: reduceMotion ? 1 : contentOpacity
        }}
      >
        <span className="eyebrow lightText">ESTUDIO ALMAGRO · ARQUITECTURA RESIDENCIAL</span>
        <h1 id="hero-title">El espacio que imaginas, con la precisión que mereces.</h1>
        <p>Arquitectura interior y reformas integrales de alto estándar en Madrid.</p>
        <Link href="#antes-despues" className="textAction lightAction">
          Descubrir proyecto
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M6 13l6 6 6-6" /></svg>
        </Link>
      </motion.div>

      <motion.div
        className="heroScrollHint"
        aria-hidden="true"
        style={{ opacity: reduceMotion ? 1 : hintOpacity }}
      >
        <span>Scroll</span>
        <i />
      </motion.div>
    </section>
  );
}
