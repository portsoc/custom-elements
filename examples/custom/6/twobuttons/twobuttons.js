export class TwoButtons extends HTMLElement {
  constructor() {
    super();
    this.b1 = null;
    this.b2 = null;
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'open' });

    this.b1 = document.createElement('button');
    this.b1.textContent = 'One';
    this.b1.addEventListener('click', this.report);

    this.b2 = document.createElement('button');
    this.b2.textContent = 'Two';
    this.b2.addEventListener('click', this.report);

    shadow.append(this.b1, this.b2);
  }

  report(e) {
    console.log(e.target.textContent);
  }
}

customElements.define('two-buttons', TwoButtons);
