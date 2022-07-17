export class ClickableSpan extends HTMLElement {
  constructor() {
    super();
    this.span = null;
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', 'click/click.css');

    this.span = document.createElement('span');
    this.span.textContent = this.textContent;
    this.addEventListener('click', this.toggle);

    shadow.append(link, this.span);
  }

  toggle() {
    this.span.classList.toggle('active');
  }
}

customElements.define('clickable-span', ClickableSpan);
