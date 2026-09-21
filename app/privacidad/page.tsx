import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  robots: { index: false, follow: true }
};

export default function PrivacyPage() {
  return (
    <section className="legalPage container">
      <span className="eyebrow">Información legal</span>
      <h1>Política de Privacidad</h1>
      <p>Antes de publicar la web, sustituye esta página por el texto legal validado con los datos fiscales y el responsable de tratamiento reales del estudio.</p>
    </section>
  );
}
