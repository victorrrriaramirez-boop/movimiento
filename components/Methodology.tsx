"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { images, methodology } from "@/lib/content";

const easing = [0.22, 1, 0.36, 1] as const;

export function Methodology() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const backgroundX = useTransform(scrollYProgress, [0, 1], ["-1.5%", "1.5%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1.06, 1.10]);

  return (
    <section ref={ref} className="methodologySection" id="metodologia" aria-labelledby="methodology-label">
      <div className="methodologyBackground" aria-hidden="true">
        <motion.div
          className="methodologyImageMotion"
          style={{
            y: reduceMotion ? 0 : backgroundY,
            x: reduceMotion ? 0 : backgroundX,
            scale: reduceMotion ? 1 : backgroundScale
          }}
        >
          <Image
            src={images.craft.src}
            alt={images.craft.alt}
            fill
            quality={90}
            sizes="100vw"
            placeholder="blur"
            blurDataURL={images.craft.blurDataURL}
            className="coverImage methodPhoto"
          />
        </motion.div>
        <div className="methodologyShade" />
      </div>

      <div className="container methodologyInner">
        <span id="methodology-label" className="eyebrow lightText">Metodología Quirúrgica</span>
        <div className="methodologyGrid">
          {methodology.map((step, index) => (
            <motion.article
              key={step.number}
              className="methodologyStep"
              initial={reduceMotion ? false : { opacity: 0, y: 32 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.65, delay: reduceMotion ? 0 : index * 0.1, ease: easing }}
            >
              <span className="methodNumber">{step.number}</span>
              <h2>{step.title}</h2>
              <p>{step.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
