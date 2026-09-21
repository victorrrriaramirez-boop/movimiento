"use client";

import Image from "next/image";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { interventionPhases } from "@/lib/content";

export function BeforeAfter() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const next = value < 0.33 ? 0 : value < 0.66 ? 1 : 2;
    setActive((current) => (current === next ? current : next));
  });

  const opacity0 = useTransform(scrollYProgress, [0, 0.26, 0.38], [1, 1, 0]);
  const opacity1 = useTransform(scrollYProgress, [0.24, 0.36, 0.58, 0.70], [0, 1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.58, 0.70, 1], [0, 1, 1]);

  const y0 = useTransform(scrollYProgress, [0, 0.38], [0, -18]);
  const y1 = useTransform(scrollYProgress, [0.24, 0.36, 0.70], [18, 0, -18]);
  const y2 = useTransform(scrollYProgress, [0.58, 0.70, 1], [18, 0, 0]);
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1.02, 1]);

  const opacities = [opacity0, opacity1, opacity2];
  const yValues = [y0, y1, y2];

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
                  aria-hidden={active !== index}
                >
                  <span className="phaseEyebrow">{phase.eyebrow}</span>
                  <h2>{phase.title}</h2>
                  <p>{phase.body}</p>
                </motion.div>
              ))}
            </div>
            <div className="phaseIndicators" aria-label={`Fase ${active + 1} de 3`}>
              {interventionPhases.map((phase, index) => (
                <span key={phase.title} className={active === index ? "isActive" : ""} />
              ))}
            </div>
          </div>

          <motion.div className="storyMedia" style={{ scale: mediaScale }}>
            {interventionPhases.map((phase, index) => (
              <motion.div key={phase.title} className="storyImageLayer" style={{ opacity: opacities[index] }}>
                <Image
                  src={phase.image.src}
                  alt={phase.image.alt}
                  fill
                  sizes="(max-width: 767px) 92vw, 58vw"
                  className="coverImage"
                  priority={index === 0}
                />
              </motion.div>
            ))}
            <div className="phaseBadge">{interventionPhases[active].badge}</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
