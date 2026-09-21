"use client";

import Image from "next/image";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { images, methodology } from "@/lib/content";

export function Methodology() {
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

  const opacity0 = useTransform(scrollYProgress, [0, 0.25, 0.37], [1, 1, 0]);
  const opacity1 = useTransform(scrollYProgress, [0.25, 0.37, 0.58, 0.70], [0, 1, 1, 0]);
  const opacity2 = useTransform(scrollYProgress, [0.58, 0.70, 1], [0, 1, 1]);
  const y0 = useTransform(scrollYProgress, [0, 0.37], [0, -30]);
  const y1 = useTransform(scrollYProgress, [0.25, 0.37, 0.70], [30, 0, -30]);
  const y2 = useTransform(scrollYProgress, [0.58, 0.70, 1], [30, 0, 0]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.1]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacities = [opacity0, opacity1, opacity2];
  const yValues = [y0, y1, y2];

  return (
    <section ref={ref} className="scrollStory methodologyStory" id="metodologia" aria-labelledby="methodology-label">
      <div className="stickyViewport darkStory">
        <motion.div className="methodBackground" style={{ scale: bgScale, y: bgY }}>
          <Image src={images.craft.src} alt={images.craft.alt} fill sizes="100vw" className="coverImage" />
        </motion.div>
        <div className="methodShade" />

        <div className="methodContent">
          <span id="methodology-label" className="eyebrow lightText">Metodología Quirúrgica</span>
          <div className="methodStack">
            {methodology.map((step, index) => (
              <motion.article
                key={step.number}
                className="methodStep"
                style={{ opacity: opacities[index], y: yValues[index] }}
                aria-hidden={active !== index}
              >
                <span className="methodNumber">{step.number}</span>
                <h2>{step.title}</h2>
                <p>{step.body}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="verticalProgress" aria-label={`Paso ${active + 1} de 3`}>
          {methodology.map((step, index) => (
            <span key={step.number} className={active === index ? "isActive" : ""} />
          ))}
        </div>
      </div>
    </section>
  );
}
