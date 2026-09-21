"use client";

import { animate, motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/content";

function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const reduceMotion = useReducedMotion();
  const target = Number(value.replace(/[^0-9]/g, ""));
  const prefix = value.startsWith("+") ? "+" : "";
  const [display, setDisplay] = useState(reduceMotion ? target : 0);

  useEffect(() => {
    if (reduceMotion) {
      setDisplay(target);
      return;
    }
    if (!inView) return;

    const controls = animate(0, target, {
      duration: 1.45,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest))
    });
    return () => controls.stop();
  }, [inView, reduceMotion, target]);

  return <strong ref={ref}>{prefix}{display}</strong>;
}

function StatItem({ item }: { item: (typeof stats)[number] }) {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "start 62%"]
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [26, 0]);

  return (
    <motion.article
      ref={ref}
      className="statItem"
      style={{ opacity: reduceMotion ? 1 : opacity, y: reduceMotion ? 0 : y }}
    >
      <CountUp value={item.value} />
      <h2>{item.title}</h2>
      <p>{item.text}</p>
    </motion.article>
  );
}

export function Stats() {
  return (
    <section className="statsSection" aria-label="Datos del estudio">
      <div className="container statsGrid">
        {stats.map((item) => <StatItem key={item.title} item={item} />)}
      </div>
    </section>
  );
}
