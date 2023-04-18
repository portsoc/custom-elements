class DigitalClock extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'closed' });
    shadow.textContent = '00:00:00';

    window.setInterval(() => {
      shadow.textContent = new Date().toLocaleTimeString();
    }, 1000);
  }
}

customElements.define('digital-clock', DigitalClock);
