import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;
    const nombre = String(body.nombre || "").trim();
    const telefono = String(body.telefono || "").trim();
    const email = String(body.email || "").trim();
    const mensaje = String(body.mensaje || "").trim();
    const company = String(body.company || "").trim();

    if (company) return NextResponse.json({ message: "Solicitud recibida." });
    if (!nombre || !telefono || !emailPattern.test(email)) {
      return NextResponse.json({ message: "Revisa los campos obligatorios antes de enviar." }, { status: 400 });
    }

    const webhook = process.env.CONTACT_WEBHOOK_URL;
    if (!webhook) {
      return NextResponse.json(
        { message: "El formulario está preparado, pero falta configurar el canal de recepción." },
        { status: 503 }
      );
    }

    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, telefono, email, mensaje, source: "atelier-architecture-web" }),
      cache: "no-store"
    });

    if (!response.ok) {
      return NextResponse.json({ message: "No se ha podido entregar el mensaje. Inténtalo de nuevo." }, { status: 502 });
    }

    return NextResponse.json({ message: "Gracias. Hemos recibido tu solicitud correctamente." });
  } catch {
    return NextResponse.json({ message: "No se ha podido procesar la solicitud." }, { status: 400 });
  }
}
