class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <footer class="footer is-100">
      <div class="mail-me">
        <a href="">
          <i class='bx bx-envelope'></i>
        </a>
      </div>
      <span class="footer-copy">&#169; All rights and lefts reserved. 2022.</span>
    </footer>
    `;
  }
}

customElements.define('main-footer', Footer);


