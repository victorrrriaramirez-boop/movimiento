import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section className="statsSection" aria-label="Datos del estudio">
      <div className="container statsGrid">
        {stats.map((item) => (
          <article key={item.title} className="statItem">
            <strong>{item.value}</strong>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
