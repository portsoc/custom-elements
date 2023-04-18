export class CopyablePre extends HTMLElement {
  constructor() {
    super();
    this.span = null;
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('type', 'text/css');
    link.setAttribute('href', import.meta.resolve('./copyablepre.css'));

    this.pre = document.createElement('pre');
    this.pre.textContent = this.textContent.trim();

    this.button = document.createElement('button');
    this.button.textContent = '📋';
    this.button.addEventListener('click', this.copy.bind(this));

    shadow.append(link, this.pre, this.button);
  }

  copy() {
    navigator.clipboard.writeText(this.pre.textContent);
    this.button.textContent = 'Copied! ✅';
    setTimeout(() => {
      this.button.textContent = '📋';
    }, 3000);
  }
}

customElements.define('copyable-pre', CopyablePre);
