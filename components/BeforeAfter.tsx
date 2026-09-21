"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { interventionPhases } from "@/lib/content";

export function BeforeAfter() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  // A lightly damped spring removes the stepped feeling caused by raw scroll events
  // while preserving a direct 1:1 relationship with the user's scroll position.
  const progress = useSpring(scrollYProgress, {
    stiffness: 115,
    damping: 28,
    mass: 0.28,
    restDelta: 0.0005
  });

  const opacity0 = useTransform(progress, [0, 0.22, 0.39], [1, 1, 0]);
  const opacity1 = useTransform(progress, [0.23, 0.39, 0.58, 0.74], [0, 1, 1, 0]);
  const opacity2 = useTransform(progress, [0.59, 0.75, 1], [0, 1, 1]);

  const y0 = useTransform(progress, [0, 0.22, 0.39], [0, 0, -30]);
  const y1 = useTransform(progress, [0.23, 0.39, 0.58, 0.74], [30, 0, 0, -30]);
  const y2 = useTransform(progress, [0.59, 0.75, 1], [30, 0, 0]);

  const imageY0 = useTransform(progress, [0, 0.39], [0, -10]);
  const imageY1 = useTransform(progress, [0.23, 0.49, 0.74], [10, 0, -10]);
  const imageY2 = useTransform(progress, [0.59, 1], [10, 0]);

  const badgeY0 = useTransform(progress, [0, 0.39], [0, -8]);
  const badgeY1 = useTransform(progress, [0.23, 0.39, 0.74], [8, 0, -8]);
  const badgeY2 = useTransform(progress, [0.59, 0.75, 1], [8, 0, 0]);

  const fill0 = useTransform(progress, [0, 0.33], [0, 1]);
  const fill1 = useTransform(progress, [0.33, 0.66], [0, 1]);
  const fill2 = useTransform(progress, [0.66, 1], [0, 1]);

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

          <div className="storyMedia">
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
                  sizes="(max-width: 767px) 100vw, (max-width: 1440px) 60vw, 864px"
                  className="coverImage"
                  quality={100}
                  priority={index === 0}
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
          </div>
        </div>
      </div>
    </section>
  );
}
