"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      const result = (await response.json()) as { message?: string };
      if (!response.ok) throw new Error(result.message || "No se ha podido enviar el formulario.");
      form.reset();
      setStatus("success");
      setMessage(result.message || "Mensaje enviado correctamente.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "No se ha podido enviar el formulario.");
    }
  }

  return (
    <form className="contactForm" onSubmit={onSubmit} noValidate>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="company">Empresa</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="field">
        <label htmlFor="nombre">Nombre completo</label>
        <input id="nombre" name="nombre" placeholder="p. ej. Carlos Mendizábal" required autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="telefono">Teléfono</label>
        <input id="telefono" name="telefono" type="tel" placeholder="+34 600 000 000" required autoComplete="tel" />
      </div>
      <div className="field">
        <label htmlFor="email">Correo electrónico</label>
        <input id="email" name="email" type="email" placeholder="carlos@ejemplo.com" required autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="mensaje">Mensaje y detalles del proyecto</label>
        <textarea id="mensaje" name="mensaje" rows={3} placeholder="Ubicación aproximada, superficie en m², estado actual y objetivos de la reforma..." />
      </div>
      <button className="primaryButton" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Enviando…" : "Solicitar estudio de viabilidad"}
      </button>
      <p className="formFootnote">Respuesta garantizada por un arquitecto senior en 24 horas laborables.</p>
      <div className={`formStatus ${status}`} role="status" aria-live="polite">{message}</div>
    </form>
  );
}
