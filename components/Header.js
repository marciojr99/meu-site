class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header class="header is-100" id="header">
        <a href="./index.html" class="header-logo box-bordered top">
          M
        </a>

        <nav class="nav-container">
          <ul class="menu">
            <li class="menu-item"><a href="./index.html">home</a></li>
            <li class="menu-item"><a href="./about-me.html">about me</a></li>
            <li class="menu-item"><a href="./portfolio.html">portfolio</a></li>
          
          </ul>
        </nav>

        <address class="contacts">
          <a class="contact-item" title="Github" target="_blank" href="https://github.com/marciojr99">
            <i class='bx bxl-github'></i>
          </a>
          <a class="contact-item" title="LinkedIn" target="_blank" href="https://www.linkedin.com/in/marcio-ara%C3%BAjo-842b4b12a/">
            <i class='bx bxl-linkedin-square' ></i>
          </a>
          
          
          <a class="contact-item" title="Instagram" target="_blank" href="https://www.instagram.com/m_junior99/?hl=bg">
            <i class='bx bxl-instagram' ></i>
          </a>
        </address>
      </header>
    `;
  }
}

customElements.define('main-header', Header);


