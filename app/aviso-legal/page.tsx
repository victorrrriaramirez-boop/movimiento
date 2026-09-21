import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal",
  robots: { index: false, follow: true }
};

export default function LegalPage() {
  return (
    <section className="legalPage container">
      <span className="eyebrow">Información legal</span>
      <h1>Aviso Legal</h1>
      <p>Antes de publicar la web, sustituye esta página por el aviso legal definitivo con la titularidad, identificación fiscal y demás datos obligatorios reales.</p>
    </section>
  );
}
