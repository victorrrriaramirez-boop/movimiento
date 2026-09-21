import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Methodology } from "@/components/Methodology";
import { MaterialGallery } from "@/components/MaterialGallery";
import { Stats } from "@/components/Stats";
import { Testimonial } from "@/components/Testimonial";
import { ContactSection } from "@/components/ContactSection";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Reformas Integrales de Alta Gama en Madrid",
  description: "Arquitectura interior y reformas integrales de alto estándar en Madrid, con precisión constructiva, materialidad noble y dirección arquitectónica.",
  path: "/"
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <BeforeAfter />
      <Methodology />
      <MaterialGallery />
      <Stats />
      <Testimonial />
      <ContactSection />
    </>
  );
}
