import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/content";

export function ContactSection({ standalone = false }: { standalone?: boolean }) {
  return (
    <section className={standalone ? "contactSection standalone" : "contactSection"} id="contacto" aria-labelledby="contact-title">
      <div className="container contactGrid">
        <div className="contactInfo">
          <div>
            <span className="eyebrow">Iniciar Conversación</span>
            <h2 id="contact-title">Estudio Almagro</h2>
          </div>
          <p>
            Limitamos deliberadamente el número de reformas simultáneas para garantizar la presencia continua de un arquitecto director de proyecto en obra cada día.
          </p>
          <dl className="contactDetails">
            <div>
              <dt>Dirección</dt>
              <dd>{site.address}</dd>
            </div>
            <div>
              <dt>Atención Personalizada</dt>
              <dd><a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a> · <a href={`mailto:${site.email}`}>{site.email}</a></dd>
            </div>
          </dl>
        </div>
        <div className="contactFormCard"><ContactForm /></div>
      </div>
    </section>
  );
}
