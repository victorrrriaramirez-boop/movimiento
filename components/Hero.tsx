"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { images } from "@/lib/content";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  const y = useTransform(progress, [0, 1], [-8, 52]);
  const textY = useTransform(progress, [0, 1], [0, -38]);
  const textOpacity = useTransform(progress, [0, 0.78], [1, 0]);

  return (
    <section ref={ref} className="hero" aria-labelledby="hero-title">
      <motion.div className="heroMedia" style={{ y }}>
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={100}
          className="coverImage"
        />
      </motion.div>
      <div className="heroOverlay" />
      <motion.div className="heroContent" style={{ y: textY, opacity: textOpacity }}>
        <span className="eyebrow lightText">ESTUDIO ALMAGRO · ARQUITECTURA RESIDENCIAL</span>
        <h1 id="hero-title">El espacio que imaginas, con la precisión que mereces.</h1>
        <p>Arquitectura interior y reformas integrales de alto estándar en Madrid.</p>
        <Link href="#antes-despues" className="textAction lightAction">
          Descubrir proyecto
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M6 13l6 6 6-6" /></svg>
        </Link>
      </motion.div>
    </section>
  );
}
