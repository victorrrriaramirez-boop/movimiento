import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { BeforeAfter } from "@/components/BeforeAfter";
import { MaterialGallery } from "@/components/MaterialGallery";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Proyectos y secuencias de intervención",
  description: "Selección visual de reformas integrales, evolución de obra y detalles de materialidad desarrollados por Atelier Architecture en Madrid.",
  path: "/proyectos"
});

export default function ProyectosPage() {
  return (
    <>
      <PageHero
        eyebrow="Proyectos"
        title="La transformación se entiende mejor cuando se ve el proceso completo."
        intro="Diagnóstico, liberación estructural, resolución arquitectónica y materialidad se leen como una única secuencia de proyecto."
        image="projects"
      />
      <BeforeAfter />
      <MaterialGallery compact />
    </>
  );
}
