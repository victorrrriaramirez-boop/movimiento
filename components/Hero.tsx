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

  // Apple-style opening: the visual starts as a framed scene and expands into the viewport.
  // Everything remains tied 1:1 to native scroll, with no spring or artificial inertia.
  const stageScale = useTransform(scrollYProgress, [0, 0.16, 1], [0.91, 1, 1]);
  const stageY = useTransform(scrollYProgress, [0, 0.16], [26, 0]);
  const stageRadius = useTransform(scrollYProgress, [0, 0.16], [22, 0]);

  const opacity0 = useTransform(scrollYProgress, [0, 0.29, 0.44], [1, 1, 0]);
  const opacity1 = useTransform(scrollYProgress, [0.29, 0.44, 0.61, 0.76], [0, 1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.61, 0.76, 1], [0, 1, 1]);

  const scale0 = useTransform(scrollYProgress, [0, 0.44], [1.075, 1.01]);
  const scale1 = useTransform(scrollYProgress, [0.29, 0.76], [1.065, 1.008]);
  const scale2 = useTransform(scrollYProgress, [0.61, 1], [1.055, 1]);

  const y0 = useTransform(scrollYProgress, [0, 0.44], ["1.4%", "-0.7%"]);
  const y1 = useTransform(scrollYProgress, [0.29, 0.76], ["0.9%", "-0.55%"]);
  const y2 = useTransform(scrollYProgress, [0.61, 1], ["0.7%", "-0.35%"]);

  const contentOpacity = useTransform(scrollYProgress, [0, 0.10, 0.25], [1, 1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.25], [0, -36]);
  const contentScale = useTransform(scrollYProgress, [0, 0.25], [1, 0.985]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.20, 0.44, 1], [1, 0.78, 0.52, 0.34]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.08, 0.17], [1, 0.85, 0]);
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const opacities = [opacity0, opacity1, opacity2];
  const scales = [scale0, scale1, scale2];
  const ys = [y0, y1, y2];

  return (
    <section ref={ref} className="heroStory" aria-labelledby="hero-title">
      <div className="heroSticky">
        <motion.div
          className="heroVisualStage"
          style={{
            scale: reduceMotion ? 1 : stageScale,
            y: reduceMotion ? 0 : stageY,
            borderRadius: reduceMotion ? 0 : stageRadius
          }}
        >
          <div className="heroMediaStack" aria-hidden="true">
            {heroFrames.map((frame, index) => (
              <motion.div
                key={frame.src}
                className="heroMediaLayer"
                style={{
                  opacity: reduceMotion ? (index === 0 ? 1 : 0) : opacities[index],
                  scale: reduceMotion ? 1 : scales[index],
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
        </motion.div>

        <motion.div
          className="heroContent"
          style={{
            y: reduceMotion ? 0 : contentY,
            scale: reduceMotion ? 1 : contentScale,
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

        <motion.div className="heroScrollHint" aria-hidden="true" style={{ opacity: reduceMotion ? 1 : hintOpacity }}>
          <span>Scroll</span>
          <i />
        </motion.div>

        <div className="heroProgress" aria-hidden="true">
          <motion.i style={{ scaleX: reduceMotion ? 1 : progressScale }} />
        </div>
      </div>
    </section>
  );
}
