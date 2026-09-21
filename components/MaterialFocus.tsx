"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { images } from "@/lib/content";

export function MaterialFocus() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  // The soft and sharp assets are separate files. Runtime animation is only opacity + transform,
  // avoiding expensive CSS blur filters while the material resolves into focus.
  const softOpacity = useTransform(scrollYProgress, [0, 0.18, 0.48], [1, 0.9, 0]);
  const sharpOpacity = useTransform(scrollYProgress, [0.10, 0.48], [0, 1]);
  const imageScale = useTransform(scrollYProgress, [0, 0.55, 1], [1.12, 1.045, 1.01]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["1.8%", "-1.2%"]);
  const copyOpacity = useTransform(scrollYProgress, [0.28, 0.50, 0.86, 1], [0, 1, 1, 0.92]);
  const copyY = useTransform(scrollYProgress, [0.28, 0.52], [24, 0]);
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="materialFocusStory" aria-labelledby="material-focus-title">
      <div className="materialFocusSticky">
        <div className="materialFocusCanvas" aria-hidden="true">
          <motion.div
            className="materialFocusLayer"
            style={{
              opacity: reduceMotion ? 0 : softOpacity,
              scale: reduceMotion ? 1 : imageScale,
              y: reduceMotion ? 0 : imageY
            }}
          >
            <Image
              src="/images/travertine-oak-detail-soft.jpg"
              alt={images.travertine.alt}
              fill
              quality={90}
              sizes="100vw"
              className="coverImage materialFocusImage"
            />
          </motion.div>

          <motion.div
            className="materialFocusLayer"
            style={{
              opacity: reduceMotion ? 1 : sharpOpacity,
              scale: reduceMotion ? 1 : imageScale,
              y: reduceMotion ? 0 : imageY
            }}
          >
            <Image
              src={images.travertine.src}
              alt={images.travertine.alt}
              fill
              quality={90}
              sizes="100vw"
              placeholder="blur"
              blurDataURL={images.travertine.blurDataURL}
              className="coverImage materialFocusImage"
            />
          </motion.div>
          <div className="materialFocusVeil" />
        </div>

        <motion.div
          className="materialFocusCopy container"
          style={{
            opacity: reduceMotion ? 1 : copyOpacity,
            y: reduceMotion ? 0 : copyY
          }}
        >
          <span className="eyebrow">Detalle y Textura</span>
          <h2 id="material-focus-title">Materialidad noble y acabado artesanal</h2>
          <p>
            Carpinterías a medida de suelo a techo, roble europeo enrasado, piedra natural de cantera milimétricamente ajustada e iluminación rasante calibrada a 2700K.
          </p>
          <span className="materialFocusLabel">02 / Encuentro Travertino &amp; Roble</span>
        </motion.div>

        <div className="materialFocusProgress" aria-hidden="true">
          <motion.i style={{ scaleX: reduceMotion ? 1 : progressScale }} />
        </div>
      </div>
    </section>
  );
}
