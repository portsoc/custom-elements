class DigitalClock extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'closed' });

    const style = document.createElement('link');
    style.setAttribute('rel', 'stylesheet');
    style.setAttribute('href', import.meta.resolve('./clock.css'));
    shadow.append(style);

    const span = document.createElement('span');
    span.textContent = '00:00:00';
    shadow.append(span);

    window.setInterval(() => {
      span.textContent = new Date().toLocaleTimeString();
    }, 1000);
  }
}

customElements.define('digital-clock', DigitalClock);
