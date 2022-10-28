export class Clock extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: 'closed' });

    const e = document.createElement('link');
    e.setAttribute('rel', 'stylesheet');
    e.setAttribute('type', 'text/css');
    e.setAttribute('href', 'clock/clock.css');

    const p = document.createElement('span');

    shadow.append(e, p);

    window.setInterval(() => {
      let timeNow = new Date().toLocaleTimeString();
      if (this.hasAttribute('seconds')) {
        // seconds are not required by default
      } else {
        timeNow = timeNow.slice(0, 5);
      }
      p.textContent = timeNow;
    }, 1000);
  }

}

customElements.define('my-clock', Clock);
