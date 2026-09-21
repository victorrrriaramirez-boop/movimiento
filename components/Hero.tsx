"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { images, type SiteImage } from "@/lib/content";

const heroFrames: readonly SiteImage[] = [images.hero, images.after, images.doubleHeight];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  // Continuous Apple-style image choreography: zoom out, drift and crossfade.
  const opacity0 = useTransform(scrollYProgress, [0, 0.28, 0.45], [1, 1, 0]);
  const opacity1 = useTransform(scrollYProgress, [0.28, 0.45, 0.62, 0.80], [0, 1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.62, 0.80, 1], [0, 1, 1]);

  const scale0 = useTransform(scrollYProgress, [0, 0.45], [1.14, 1.02]);
  const scale1 = useTransform(scrollYProgress, [0.28, 0.80], [1.12, 1.01]);
  const scale2 = useTransform(scrollYProgress, [0.62, 1], [1.12, 1.02]);

  const x0 = useTransform(scrollYProgress, [0, 0.45], ["-2.5%", "1.5%"]);
  const x1 = useTransform(scrollYProgress, [0.28, 0.80], ["2%", "-1.5%"]);
  const x2 = useTransform(scrollYProgress, [0.62, 1], ["-1.5%", "1%"]);

  const y0 = useTransform(scrollYProgress, [0, 0.45], ["2.5%", "-1.5%"]);
  const y1 = useTransform(scrollYProgress, [0.28, 0.80], ["-2%", "1.5%"]);
  const y2 = useTransform(scrollYProgress, [0.62, 1], ["2%", "-1%"]);

  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -52]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.22, 0.48], [1, 0.92, 0]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.18, 0.35], [1, 0.6, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.48, 1], [1, 0.82, 0.66]);

  const opacities = [opacity0, opacity1, opacity2];
  const scales = [scale0, scale1, scale2];
  const xs = [x0, x1, x2];
  const ys = [y0, y1, y2];

  return (
    <section ref={ref} className="heroStory" aria-labelledby="hero-title">
      <div className="heroSticky">
        <div className="heroMediaStack" aria-hidden="true">
          {heroFrames.map((frame, index) => (
            <motion.div
              key={frame.src}
              className="heroMediaLayer"
              style={{
                opacity: reduceMotion ? (index === 0 ? 1 : 0) : opacities[index],
                scale: reduceMotion ? 1 : scales[index],
                x: reduceMotion ? 0 : xs[index],
                y: reduceMotion ? 0 : ys[index]
              }}
            >
              <Image
                src={frame.src}
                alt={frame.alt}
                fill
                priority={index === 0}
                quality={90}
                sizes="100vw"
                placeholder="blur"
                blurDataURL={frame.blurDataURL}
                className="coverImage heroImage"
              />
            </motion.div>
          ))}
        </div>

        <motion.div className="heroOverlay" style={{ opacity: reduceMotion ? 1 : overlayOpacity }} />

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
      </div>
    </section>
  );
}
