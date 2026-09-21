export function Testimonial() {
  return (
    <section className="testimonialSection" aria-label="Testimonio">
      <div className="testimonialInner">
        <svg className="quoteIcon" viewBox="0 0 48 48" aria-hidden="true">
          <path d="M10 28h8v10h-8V28Zm20 0h8v10h-8V28ZM9 27c0-10 4-16 12-19v5c-4 2-6 5-7 10h4v5H9Zm20 0c0-10 4-16 12-19v5c-4 2-6 5-7 10h4v5h-9Z" />
        </svg>
        <blockquote>
          «Transformaron un piso señorial de los años 50 en un refugio de calma absoluta y luz natural. La ejecución fue tan impecable como el diseño.»
        </blockquote>
        <cite>Elena &amp; Marcos — Barrio de Salamanca, Madrid</cite>
      </div>
    </section>
  );
}
