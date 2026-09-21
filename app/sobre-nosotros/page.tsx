import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Stats } from "@/components/Stats";
import { Testimonial } from "@/components/Testimonial";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Sobre Nosotros | Estudio Almagro",
  description: "Conoce el enfoque de Estudio Almagro: dirección arquitectónica continua, precisión constructiva y una selección deliberada de reformas simultáneas.",
  path: "/sobre-nosotros"
});

export default function SobreNosotrosPage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre Nosotros"
        title="Disciplina de proyecto, presencia en obra y materialidad sin artificio."
        intro="Limitamos deliberadamente el número de reformas simultáneas para garantizar la presencia continua de un arquitecto director de proyecto en obra cada día."
        image="about"
      />
      <section className="contentSection aboutSection">
        <div className="container editorialGrid">
          <span className="eyebrow">Estudio Almagro</span>
          <div>
            <h2>Una arquitectura que se sostiene en proporción, luz y ejecución.</h2>
            <p>
              El enfoque del estudio parte de una lectura rigurosa de la preexistencia y continúa con decisiones estructurales, técnicas y materiales coordinadas desde una misma dirección de proyecto.
            </p>
            <p>
              La expresión final evita recursos decorativos innecesarios y se concentra en encuentros limpios, planos continuos, carpinterías enrasadas, piedra natural y una iluminación calibrada con precisión.
            </p>
          </div>
        </div>
      </section>
      <Stats />
      <Testimonial />
    </>
  );
}
