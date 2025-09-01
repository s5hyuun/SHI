function Header() {
  return (<header class="header">
    <div class="brand">
      <span class="dot" aria-hidden="true"></span>
      <span class="title">Components Practice</span>
    </div>
    <nav class="nav" aria-label="primary">
      <a href="#features">Features</a>
      <a href="#gallery">Gallery</a>
      <a href="#about">About</a>
    </nav>
  </header>);
}

export default Header;