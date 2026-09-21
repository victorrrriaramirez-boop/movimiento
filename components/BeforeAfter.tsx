"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { interventionPhases } from "@/lib/content";

export function BeforeAfter() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  // Long overlap windows create the same continuous, cinematic feeling used in
  // premium product storytelling: one phase never disappears before the next is present.
  const imageOpacity0 = useTransform(scrollYProgress, [0, 0.26, 0.42], [1, 1, 0]);
  const imageOpacity1 = useTransform(scrollYProgress, [0.26, 0.42, 0.58, 0.74], [0, 1, 1, 0]);
  const imageOpacity2 = useTransform(scrollYProgress, [0.58, 0.74, 1], [0, 1, 1]);

  const imageScale0 = useTransform(scrollYProgress, [0, 0.42], [1.08, 1]);
  const imageScale1 = useTransform(scrollYProgress, [0.26, 0.74], [1.075, 1]);
  const imageScale2 = useTransform(scrollYProgress, [0.58, 1], [1.07, 1]);

  const imageY0 = useTransform(scrollYProgress, [0, 0.42], ["1.5%", "-0.5%"]);
  const imageY1 = useTransform(scrollYProgress, [0.26, 0.74], ["1.1%", "-0.45%"]);
  const imageY2 = useTransform(scrollYProgress, [0.58, 1], ["0.9%", "-0.3%"]);

  const textOpacity0 = useTransform(scrollYProgress, [0, 0.065, 0.27, 0.42], [0, 1, 1, 0]);
  const textOpacity1 = useTransform(scrollYProgress, [0.27, 0.42, 0.59, 0.74], [0, 1, 1, 0]);
  const textOpacity2 = useTransform(scrollYProgress, [0.59, 0.74, 1], [0, 1, 1]);

  const textY0 = useTransform(scrollYProgress, [0, 0.065, 0.27, 0.42], [32, 0, 0, -24]);
  const textY1 = useTransform(scrollYProgress, [0.27, 0.42, 0.59, 0.74], [32, 0, 0, -24]);
  const textY2 = useTransform(scrollYProgress, [0.59, 0.74, 1], [32, 0, 0]);

  const textScale0 = useTransform(scrollYProgress, [0, 0.065], [0.985, 1]);
  const textScale1 = useTransform(scrollYProgress, [0.27, 0.42], [0.985, 1]);
  const textScale2 = useTransform(scrollYProgress, [0.59, 0.74], [0.985, 1]);

  const imageOpacities = [imageOpacity0, imageOpacity1, imageOpacity2];
  const imageScales = [imageScale0, imageScale1, imageScale2];
  const imageYs = [imageY0, imageY1, imageY2];
  const textOpacities = [textOpacity0, textOpacity1, textOpacity2];
  const textYs = [textY0, textY1, textY2];
  const textScales = [textScale0, textScale1, textScale2];

  return (
    <section ref={ref} className="beforeAfterStory" id="antes-despues" aria-labelledby="intervention-title">
      <h2 className="srOnly" id="intervention-title">Secuencia de intervención</h2>

      <div className="interventionSticky">
        <div className="interventionMedia" aria-hidden="true">
          {interventionPhases.map((phase, index) => (
            <motion.div
              key={phase.title}
              className="interventionImageLayer"
              style={{
                opacity: reduceMotion ? (index === 0 ? 1 : 0) : imageOpacities[index],
                scale: reduceMotion ? 1 : imageScales[index],
                y: reduceMotion ? 0 : imageYs[index]
              }}
            >
              <Image
                src={phase.image.src}
                alt={phase.image.alt}
                fill
                quality={90}
                sizes="100vw"
                placeholder="blur"
                blurDataURL={phase.image.blurDataURL}
                className="coverImage interventionPhoto"
              />
            </motion.div>
          ))}
          <div className="interventionShade" />
        </div>

        <div className="interventionCopyShell container">
          <div className="interventionCopy">
            <div className="sectionKicker lightKicker"><span />Secuencia de Intervención</div>

            <div className="interventionTextStack">
              {interventionPhases.map((phase, index) => (
                <motion.article
                  key={phase.title}
                  className="interventionText"
                  style={{
                    opacity: reduceMotion ? (index === 0 ? 1 : 0) : textOpacities[index],
                    y: reduceMotion ? 0 : textYs[index],
                    scale: reduceMotion ? 1 : textScales[index]
                  }}
                >
                  <span className="phaseEyebrow">{phase.eyebrow}</span>
                  <h2>{phase.title}</h2>
                  <p>{phase.body}</p>
                </motion.article>
              ))}
            </div>

            <div className="interventionStatus" aria-hidden="true">
              <div className="interventionBadgeStack">
                {interventionPhases.map((phase, index) => (
                  <motion.span
                    key={phase.badge}
                    className="interventionBadge"
                    style={{ opacity: reduceMotion ? (index === 0 ? 1 : 0) : textOpacities[index] }}
                  >
                    {phase.badge}
                  </motion.span>
                ))}
              </div>
              <span className="interventionProgressTrack">
                <motion.i
                  className="interventionProgressFill"
                  style={{ scaleX: reduceMotion ? 1 : scrollYProgress }}
                />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="interventionStaticList container" aria-label="Secuencia de intervención sin animaciones">
        <div className="sectionKicker"><span />Secuencia de Intervención</div>
        {interventionPhases.map((phase) => (
          <article key={phase.title} className="interventionStaticCard">
            <div className="interventionStaticImage">
              <Image
                src={phase.image.src}
                alt={phase.image.alt}
                fill
                quality={90}
                sizes="(max-width: 767px) 100vw, 50vw"
                placeholder="blur"
                blurDataURL={phase.image.blurDataURL}
                className="coverImage"
              />
            </div>
            <div>
              <span className="phaseEyebrow">{phase.eyebrow}</span>
              <h2>{phase.title}</h2>
              <p>{phase.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
