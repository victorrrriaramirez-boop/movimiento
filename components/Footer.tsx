import Link from "next/link";

export function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footerInner">
        <Link href="/" className="footerBrand">ATELIER ARCHITECTURE</Link>
        <p>© {new Date().getFullYear()} Atelier Architecture &amp; Reformas. Todos los derechos reservados.</p>
        <nav aria-label="Enlaces legales" className="footerNav">
          <Link href="/privacidad">Privacidad</Link>
          <Link href="/aviso-legal">Aviso Legal</Link>
          <Link href="/proyectos">Archivo</Link>
        </nav>
      </div>
    </footer>
  );
}
