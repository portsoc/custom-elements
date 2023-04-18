export class DigitalClock extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'closed' });

    const style = document.createElement('link');
    style.setAttribute('rel', 'stylesheet');
    style.setAttribute('href', import.meta.resolve('./clock.css'));
    shadow.append(style);

    this.span = document.createElement('span');
    this.span.textContent = '00:00:00';
    shadow.append(this.span);
  }

  update() {
    let timeNow = new Date().toLocaleTimeString();
    if (this.hasAttribute('seconds')) {
      // leave the string as hh:mm:ss
    } else {
      // trim it to hh:mm
      timeNow = timeNow.slice(0, 5);
    }
    this.span.textContent = timeNow;
  }

  connectedCallback() {
    this.intervalID = window.setInterval(this.update.bind(this), 1000);
  }

  disconnectedCallback() {
    this.intervalID = window.clearInterval(this.intervalID);
  }
}

customElements.define('digital-clock', DigitalClock);
