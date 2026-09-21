"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
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
      duration: 1.35,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(Math.round(latest))
    });
    return () => controls.stop();
  }, [inView, reduceMotion, target]);

  return <strong ref={ref}>{prefix}{display}</strong>;
}

export function Stats() {
  return (
    <section className="statsSection" aria-label="Datos del estudio">
      <div className="container statsGrid">
        {stats.map((item) => (
          <article key={item.title} className="statItem">
            <CountUp value={item.value} />
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
