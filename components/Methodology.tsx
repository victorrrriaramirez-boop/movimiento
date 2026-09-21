"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { images, methodology } from "@/lib/content";

export function Methodology() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  // Direct, frame-by-frame mapping from the scroll position. No spring = no delayed
  // catching-up after the user stops or reverses the trackpad/wheel.
  const opacity0 = useTransform(scrollYProgress, [0, 0.23, 0.39], [1, 0.97, 0]);
  const opacity1 = useTransform(scrollYProgress, [0.22, 0.39, 0.60, 0.76], [0, 1, 0.97, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.59, 0.76, 1], [0, 1, 1]);

  const y0 = useTransform(scrollYProgress, [0, 0.39], [0, -44]);
  const y1 = useTransform(scrollYProgress, [0.22, 0.76], [44, -44]);
  const y2 = useTransform(scrollYProgress, [0.59, 1], [44, -8]);

  const bgY = useTransform(scrollYProgress, [0, 1], [-26, 26]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.34, 0.42, 0.36]);
  const shadeOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.54, 0.38, 0.50]);

  const fill0 = useTransform(scrollYProgress, [0, 0.34], [0, 1]);
  const fill1 = useTransform(scrollYProgress, [0.33, 0.67], [0, 1]);
  const fill2 = useTransform(scrollYProgress, [0.66, 1], [0, 1]);

  const opacities = [opacity0, opacity1, opacity2];
  const yValues = [y0, y1, y2];
  const fills = [fill0, fill1, fill2];

  return (
    <section ref={ref} className="scrollStory methodologyStory" id="metodologia" aria-labelledby="methodology-label">
      <div className="stickyViewport darkStory">
        <motion.div className="methodBackground" style={{ y: bgY, opacity: bgOpacity }}>
          <Image
            src={images.craft.src}
            alt={images.craft.alt}
            fill
            sizes="100vw"
            className="coverImage methodPhoto"
            unoptimized
            loading="eager"
            decoding="sync"
          />
        </motion.div>
        <motion.div className="methodShade" style={{ opacity: shadeOpacity }} />

        <div className="methodContent">
          <span id="methodology-label" className="eyebrow lightText">Metodología Quirúrgica</span>
          <div className="methodStack">
            {methodology.map((step, index) => (
              <motion.article
                key={step.number}
                className="methodStep"
                style={{ opacity: opacities[index], y: yValues[index] }}
              >
                <span className="methodNumber">{step.number}</span>
                <h2>{step.title}</h2>
                <p>{step.body}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="verticalProgress" aria-hidden="true">
          {methodology.map((step, index) => (
            <span key={step.number} className="verticalProgressTrack">
              <motion.i className="verticalProgressFill" style={{ scaleY: fills[index] }} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
