function CTAButton({ href, children, primary }) {
    return (
        <a className={primary ? "primary" : ""} href={href}>
            {children}
        </a>
    );
}

export default CTAButton;