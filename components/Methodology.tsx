"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { images, methodology } from "@/lib/content";

const easing = [0.22, 1, 0.36, 1] as const;

export function Methodology() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="methodologySection" id="metodologia" aria-labelledby="methodology-label">
      <div className="methodologyBackground" aria-hidden="true">
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
