"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [
  ["/", "Inicio"],
  ["/servicios", "Servicios"],
  ["/proyectos", "Proyectos"],
  ["/sobre-nosotros", "Sobre Nosotros"],
  ["/contacto", "Contacto"]
] as const;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="siteHeader">
      <div className="headerInner">
        <Link href="/" className="brand" aria-label="Atelier Architecture — Inicio">
          ATELIER ARCHITECTURE
        </Link>

        <nav className="desktopNav" aria-label="Navegación principal">
          {nav.map(([href, label]) => (
            <Link key={href} href={href} className={pathname === href ? "navLink isActive" : "navLink"}>
              {label}
            </Link>
          ))}
        </nav>

        <div className="headerActions">
          <Link href="/contacto" className="dossierLink">Consultar dossier</Link>
          <button
            type="button"
            className="menuButton"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((value) => !value)}
          >
            <span aria-hidden="true" className={open ? "menuIcon isOpen" : "menuIcon"}>
              <i />
              <i />
            </span>
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={open ? "mobileMenu isOpen" : "mobileMenu"}>
        <nav aria-label="Navegación móvil">
          {nav.map(([href, label]) => (
            <Link key={href} href={href} className={pathname === href ? "mobileNavLink isActive" : "mobileNavLink"}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
