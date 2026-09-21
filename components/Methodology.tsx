"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { images, methodology } from "@/lib/content";

export function Methodology() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 29,
    mass: 0.3,
    restDelta: 0.0005
  });

  const opacity0 = useTransform(progress, [0, 0.21, 0.39], [1, 1, 0]);
  const opacity1 = useTransform(progress, [0.23, 0.39, 0.58, 0.75], [0, 1, 1, 0]);
  const opacity2 = useTransform(progress, [0.59, 0.75, 1], [0, 1, 1]);

  const y0 = useTransform(progress, [0, 0.21, 0.39], [0, 0, -38]);
  const y1 = useTransform(progress, [0.23, 0.39, 0.58, 0.75], [38, 0, 0, -38]);
  const y2 = useTransform(progress, [0.59, 0.75, 1], [38, 0, 0]);

  const bgY = useTransform(progress, [0, 0.5, 1], [-20, 0, 20]);
  const bgOpacity = useTransform(progress, [0, 0.5, 1], [0.31, 0.38, 0.31]);
  const shadeOpacity = useTransform(progress, [0, 0.5, 1], [0.48, 0.36, 0.48]);

  const fill0 = useTransform(progress, [0, 0.33], [0, 1]);
  const fill1 = useTransform(progress, [0.33, 0.66], [0, 1]);
  const fill2 = useTransform(progress, [0.66, 1], [0, 1]);

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
            className="coverImage"
            quality={100}
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
