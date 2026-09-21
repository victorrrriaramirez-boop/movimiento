"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { images } from "@/lib/content";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  // Raw scroll progress is intentional here: no spring, no lag and no stepped state.
  // Every scroll frame maps directly to a visual change.
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -34]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.9, 1], [0.86, 0.92, 0.94]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.72, 0.62]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -92]);
  const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.62, 0.96], [1, 0.88, 0]);

  return (
    <section ref={ref} className="hero" aria-labelledby="hero-title">
      <div className="heroSticky">
        <motion.div
          className="heroMedia"
          style={{ scale: imageScale, y: imageY, opacity: imageOpacity }}
        >
          <Image
            src={images.hero.src}
            alt={images.hero.alt}
            fill
            priority
            fetchPriority="high"
            decoding="sync"
            sizes="100vw"
            unoptimized
            className="coverImage heroImage"
          />
        </motion.div>

        <motion.div className="heroOverlay" style={{ opacity: overlayOpacity }} />

        <motion.div
          className="heroContent"
          style={{ y: contentY, scale: contentScale, opacity: contentOpacity }}
        >
          <span className="eyebrow lightText">ESTUDIO ALMAGRO · ARQUITECTURA RESIDENCIAL</span>
          <h1 id="hero-title">El espacio que imaginas, con la precisión que mereces.</h1>
          <p>Arquitectura interior y reformas integrales de alto estándar en Madrid.</p>
          <Link href="#antes-despues" className="textAction lightAction">
            Descubrir proyecto
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M6 13l6 6 6-6" /></svg>
          </Link>
        </motion.div>

        <div className="heroScrollHint" aria-hidden="true">
          <span>Scroll</span>
          <i />
        </div>
      </div>
    </section>
  );
}
