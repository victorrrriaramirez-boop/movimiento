import Image from "next/image";
import { materialGallery } from "@/lib/content";

export function MaterialGallery({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "materialsSection compact" : "materialsSection"} aria-labelledby="materials-title">
      <div className="container">
        <div className="sectionHeadingSplit">
          <div>
            <span className="eyebrow">Detalle y Textura</span>
            <h2 id="materials-title">Materialidad Tangible</h2>
          </div>
          <p>
            Cada encuentro entre materiales se diseña sin solapes ni molduras decorativas: pura honestidad constructiva con tolerancias de medio milímetro.
          </p>
        </div>
        <div className="materialGrid">
          {materialGallery.map((item) => (
            <figure key={item.label} className={`materialCard ${item.className}`}>
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                sizes="(max-width: 767px) 92vw, (max-width: 1199px) 46vw, 55vw"
                className="coverImage materialImage"
                quality={100}
              />
              <figcaption>{item.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
