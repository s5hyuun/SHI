export default function Hero({ badge, title, description, ctas = [] }){
  return (
    <section className="hero" aria-labelledby="heroTitle">
      {badge && <span className="badge">{badge}</span>}
      <h1 id="heroTitle">{title}</h1>
      <p>{description}</p>
      <div className="cta">
        {ctas.map((btn, i) => (
          <a key={i} className={btn.primary ? "primary" : undefined} href={btn.href}>{btn.text}</a>
        ))}
      </div>
    </section>
  );
}
