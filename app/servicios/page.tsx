import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Methodology } from "@/components/Methodology";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Servicios de arquitectura interior y reforma integral",
  description: "Servicios de reforma integral, consolidación estructural, instalaciones ocultas y acabados artesanales para vivienda de alto estándar en Madrid.",
  path: "/servicios"
});

const services = [
  {
    number: "01",
    title: "Reforma integral y reorganización espacial",
    text: "Intervenciones orientadas a liberar la planta, mejorar la entrada de luz natural y articular cocina, salón y zonas privadas con una lectura espacial coherente."
  },
  {
    number: "02",
    title: "Consolidación e instalaciones integradas",
    text: "Apeos y refuerzos estructurales junto con aerotermia, suelo radiante refrescante, domótica KNX y aislamiento acústico multicapa, integrados sin interferencias visuales."
  },
  {
    number: "03",
    title: "Carpintería, piedra y acabado artesanal",
    text: "Carpinterías a medida, roble europeo enrasado, piedra natural y encuentros constructivos resueltos con una geometría precisa y una materialidad contenida."
  }
] as const;

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Arquitectura integral, desde la estructura hasta el último encuentro."
        intro="Un proceso continuo que coordina distribución, sistemas técnicos, materialidad y ejecución para mantener una única intención arquitectónica."
        image="services"
      />
      <section className="contentSection">
        <div className="container serviceList">
          {services.map((service) => (
            <article key={service.number} className="serviceItem">
              <span>{service.number}</span>
              <div>
                <h2>{service.title}</h2>
                <p>{service.text}</p>
              </div>
            </article>
          ))}
          <div className="sectionCta">
            <p>Cuéntanos el estado actual de tu vivienda y los objetivos de la intervención.</p>
            <Link className="primaryButton inlineButton" href="/contacto">Iniciar conversación</Link>
          </div>
        </div>
      </section>
      <Methodology />
    </>
  );
}
