export default function TestimonialCard({ name, role, avatar, children }){
  return (
    <article className="card testimonial">
      <div className="quote">{children}</div>
      <div className="who">
        <img className="avatar" src={avatar} alt={name} />
        <div><b>{name}</b><div className="muted">{role}</div></div>
      </div>
    </article>
  );
}
