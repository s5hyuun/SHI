function FeatureCard({ icon, title, text }) {
    return (
        <article className="card">
            <div className="icon" aria-hidden="true">{icon}</div>
            <h3>{title}</h3>
            <p>{text}</p>
        </article>
    );
}

export default FeatureCard;