import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ContactSection } from "@/components/ContactSection";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Contacto | Estudio Almagro",
  description: "Contacta con Estudio Almagro para plantear una reforma integral o un proyecto de arquitectura interior en Madrid.",
  path: "/contacto"
});

export default function ContactoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Iniciar una conversación de proyecto."
        intro="Comparte la ubicación aproximada, superficie, estado actual y objetivos de la reforma para que podamos estudiar la viabilidad."
        image="contact"
      />
      <ContactSection standalone />
    </>
  );
}
