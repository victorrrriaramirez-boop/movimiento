"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { interventionPhases } from "@/lib/content";

export function BeforeAfter() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  // Use the native scroll progress directly. The previous spring could trail behind
  // fast wheel/trackpad input and make the story feel like it was getting stuck.
  const opacity0 = useTransform(scrollYProgress, [0, 0.24, 0.39], [1, 0.96, 0]);
  const opacity1 = useTransform(scrollYProgress, [0.22, 0.38, 0.60, 0.76], [0, 1, 0.96, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.59, 0.75, 1], [0, 1, 1]);

  // Text and imagery keep moving throughout their visible range, so every wheel /
  // trackpad increment produces a visual response instead of waiting at plateaus.
  const y0 = useTransform(scrollYProgress, [0, 0.39], [0, -38]);
  const y1 = useTransform(scrollYProgress, [0.22, 0.76], [38, -38]);
  const y2 = useTransform(scrollYProgress, [0.59, 1], [38, -8]);

  const imageY0 = useTransform(scrollYProgress, [0, 0.39], [18, -24]);
  const imageY1 = useTransform(scrollYProgress, [0.22, 0.76], [24, -24]);
  const imageY2 = useTransform(scrollYProgress, [0.59, 1], [24, -12]);

  const badgeY0 = useTransform(scrollYProgress, [0, 0.39], [0, -10]);
  const badgeY1 = useTransform(scrollYProgress, [0.22, 0.76], [10, -10]);
  const badgeY2 = useTransform(scrollYProgress, [0.59, 1], [10, 0]);

  const fill0 = useTransform(scrollYProgress, [0, 0.34], [0, 1]);
  const fill1 = useTransform(scrollYProgress, [0.33, 0.67], [0, 1]);
  const fill2 = useTransform(scrollYProgress, [0.66, 1], [0, 1]);

  const mediaPan = useTransform(scrollYProgress, [0, 1], [7, -7]);

  const opacities = [opacity0, opacity1, opacity2];
  const yValues = [y0, y1, y2];
  const imageYValues = [imageY0, imageY1, imageY2];
  const badgeYValues = [badgeY0, badgeY1, badgeY2];
  const fills = [fill0, fill1, fill2];

  return (
    <section ref={ref} className="scrollStory beforeAfterStory" id="antes-despues" aria-labelledby="intervention-title">
      <h2 className="srOnly" id="intervention-title">Secuencia de intervención</h2>
      <div className="stickyViewport">
        <div className="storyGrid">
          <div className="storyCopy">
            <div className="sectionKicker"><span />Secuencia de Intervención</div>
            <div className="phaseCopyStack">
              {interventionPhases.map((phase, index) => (
                <motion.div
                  key={phase.title}
                  className="phaseCopy"
                  style={{ opacity: opacities[index], y: yValues[index] }}
                >
                  <span className="phaseEyebrow">{phase.eyebrow}</span>
                  <h2>{phase.title}</h2>
                  <p>{phase.body}</p>
                </motion.div>
              ))}
            </div>

            <div className="phaseIndicators" aria-hidden="true">
              {interventionPhases.map((phase, index) => (
                <span key={phase.title} className="phaseIndicatorTrack">
                  <motion.i className="phaseIndicatorFill" style={{ scaleX: fills[index] }} />
                </span>
              ))}
            </div>
          </div>

          <motion.div className="storyMedia" style={{ y: mediaPan }}>
            {interventionPhases.map((phase, index) => (
              <motion.div
                key={phase.title}
                className="storyImageLayer"
                style={{ opacity: opacities[index], y: imageYValues[index] }}
              >
                <Image
                  src={phase.image.src}
                  alt={phase.image.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1440px) 64vw, 920px"
                  className="coverImage storyPhoto"
                  unoptimized
                  loading="eager"
                  decoding="sync"
                />
              </motion.div>
            ))}

            <div className="phaseBadgeStack" aria-hidden="true">
              {interventionPhases.map((phase, index) => (
                <motion.span
                  key={phase.badge}
                  className="phaseBadge"
                  style={{ opacity: opacities[index], y: badgeYValues[index] }}
                >
                  {phase.badge}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
