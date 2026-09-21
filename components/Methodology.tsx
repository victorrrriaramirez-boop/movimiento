"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { images, methodology } from "@/lib/content";

type MethodStep = (typeof methodology)[number];

function MethodologyStep({ step }: { step: MethodStep }) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 92%", "start 52%"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.68, 1], [0, 0.75, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [36, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.985, 1]);

  return (
    <motion.article
      ref={ref}
      className="methodologyStep"
      style={{
        opacity: reduceMotion ? 1 : opacity,
        y: reduceMotion ? 0 : y,
        scale: reduceMotion ? 1 : scale
      }}
    >
      <span className="methodNumber">{step.number}</span>
      <h2>{step.title}</h2>
      <p>{step.body}</p>
    </motion.article>
  );
}

export function Methodology() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["1.8%", "-1.8%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.075, 1.02]);
  const headingY = useTransform(scrollYProgress, [0.05, 0.35], [22, 0]);
  const headingOpacity = useTransform(scrollYProgress, [0.05, 0.24], [0.35, 1]);

  return (
    <section ref={ref} className="methodologySection" id="metodologia" aria-labelledby="methodology-label">
      <div className="methodologyBackground" aria-hidden="true">
        <motion.div
          className="methodologyImageMotion"
          style={{
            y: reduceMotion ? 0 : backgroundY,
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

      <motion.div
        className="container methodologyInner"
        style={{
          y: reduceMotion ? 0 : headingY,
          opacity: reduceMotion ? 1 : headingOpacity
        }}
      >
        <span id="methodology-label" className="eyebrow lightText">Metodología Quirúrgica</span>
        <div className="methodologyGrid">
          {methodology.map((step) => <MethodologyStep key={step.number} step={step} />)}
        </div>
      </motion.div>
    </section>
  );
}
