class Clock extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'closed' });

    const p = document.createElement('span');
    shadow.append(p);

    window.setInterval(() => {
      p.textContent = new Date().toLocaleTimeString();
    }, 1000);
  }
}

customElements.define('my-clock', Clock);
