class UniGrade extends HTMLElement {
  constructor() {
    super();
    this.grades = {};
    this.grades.desmond = 40;
    this.grades.lower = 50;
    this.grades.upper = 60;
    this.grades.first = 70;
    this.width = 1000;
    this.height = 100;
    this.padding = 10;
    this.x = {};
    this.x.padding = this.padding * 4;
    this.x.width = this.width - this.x.padding - this.x.padding;
    this.x.step = this.x.width / 100;
    this.x.min = this.x.padding;
    this.x.desmond = this.x.padding + this.grades.desmond * this.x.step;
    this.x.lower = this.x.padding + this.grades.lower * this.x.step;
    this.x.upper = this.x.padding + this.grades.upper * this.x.step;
    this.x.first = this.x.padding + this.grades.first * this.x.step;
    this.x.max = this.width - this.x.padding;
    this.y = {};
    this.y.height = this.height - this.padding - this.padding;
    this.y.step = this.y.height / 100;
    this.y.min = this.padding;
    this.y.max = this.height - this.padding;
    this.y.markerheight = this.height - this.padding - this.y.step * 10;
    this.y.textpos = this.height - this.padding - this.y.step * 40;
    this.y.gradetextheight = -this.padding;
  }

  text(x, y, txt, fill = 'red') {
    const t = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    t.setAttributeNS(null, 'x', x);
    t.setAttributeNS(null, 'y', y);
    t.setAttributeNS(null, 'fill', fill);
    t.setAttributeNS(null, 'text-anchor', 'middle');
    t.setAttributeNS(null, 'alignment-baseline', 'central');

    t.append(document.createTextNode(txt));
    this.svg.append(t);
    return t;
  }

  line(x1, y1, x2, y2, col = 'black', width = 2) {
    const l = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    l.setAttribute('x1', x1);
    l.setAttribute('y1', y1);
    l.setAttribute('x2', x2);
    l.setAttribute('y2', y2);
    l.setAttribute('stroke', col);
    l.setAttribute('stroke-width', width);
    this.svg.append(l);
  }

  circ(cx, cy, r, fill = 'black', stroke = 'none', width = 2) {
    const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    c.setAttributeNS(null, 'cx', cx);
    c.setAttributeNS(null, 'cy', cy);
    c.setAttributeNS(null, 'r', r);
    c.setAttributeNS(null, 'fill', fill);
    c.setAttributeNS(null, 'stroke', stroke);
    c.setAttributeNS(null, 'stroke-width', width);
    this.svg.append(c);
  }

  marker(x, txt) {
    this.line(x, this.y.max, x, this.y.markerheight, 'lightgrey');
    this.text(x, this.y.textpos, txt, 'lightgrey');
  }

  repositionGrade() {
    if (this.gradeGroup) {
      const v = this.value === 'undefined' ? -99 : this.value;
      const gx = v * this.x.step + this.x.padding;
      const gy = this.y.markerheight;
      this.gradeGroup.setAttributeNS(
        null,
        'transform',
        `translate(${gx} ${gy})`,
      );
      while (this.gradeText.firstChild) {
        this.gradeText.firstChild.remove();
      }
      this.gradeText.append(document.createTextNode(this.value));
    }
  }

  drawGrade() {
    const col = 'rgba(98, 19, 96, 0.9)';

    /// group
    this.gradeGroup = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'g',
    );
    this.svg.append(this.gradeGroup);

    const q = this.y.step * 8;
    const mh = this.y.step * 10;

    // paddle thing
    const gp = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    gp.setAttributeNS(
      null,
      'd',
      `
    M 0,${mh - 5}
    L 0,0
    C 0,-${q} -${q},-${q * 2}, -${q * 2},-${q * 2}
    C -${q * 3},-${q * 2}, -${q * 4},-${q * 3}, -${q * 4},-${q * 4},
    L -${q * 4},-${q * 8}
    C -${q * 4},-${q * 9} -${q * 3},-${q * 10}, -${q * 2},-${q * 10}
    L ${q * 2},-${q * 10}
    C ${q * 3},-${q * 10} ${q * 4},-${q * 9} ${q * 4},-${q * 8}
    L ${q * 4},-${q * 4}
    C ${q * 4},-${q * 3} ${q * 3},-${q * 2} ${q * 2},-${q * 2}
    C ${q},-${q * 2} 0,-${q} 0,0
    `,
    );
    gp.setAttributeNS(null, 'class', 'marker');
    this.gradeGroup.append(gp);

    const c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    c.setAttributeNS(null, 'cx', 0);
    c.setAttributeNS(null, 'cy', mh);
    c.setAttributeNS(null, 'r', 5);
    c.setAttributeNS(null, 'class', 'marker');
    this.gradeGroup.append(c);

    // text
    this.gradeText = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'text',
    );
    this.gradeText.setAttributeNS(null, 'x', 0);
    this.gradeText.setAttributeNS(null, 'y', -q * 6);
    this.gradeText.setAttributeNS(null, 'fill', col);
    this.gradeText.setAttributeNS(null, 'alignment-baseline', 'central');
    this.gradeText.setAttributeNS(null, 'text-anchor', 'middle');
    this.gradeText.setAttributeNS(null, 'font-weight', 'bold');
    this.gradeText.setAttributeNS(null, 'font-size', `${this.y.step * 35}px`);
    this.gradeGroup.append(this.gradeText);

    this.repositionGrade();
  }

  drawCanvas() {
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    this.svg.setAttribute('width', this.width);
    this.svg.setAttribute('height', this.height);
    this.svg.setAttribute('viewBox', `0 0 ${this.width} ${this.height}`);
    this.svg.setAttributeNS(
      'http://www.w3.org/2000/xmlns/',
      'xmlns:xlink',
      'http://www.w3.org/1999/xlink',
    );
    this.shadow.append(this.svg);

    // this.svg.addEventListener('click', e => {
    //   let val = (e.offsetX - this.x.padding) / this.x.step;
    //   val = Math.max(0, val);
    //   val = Math.min(100, val);
    //   this.value = Math.floor(val);
    // });
  }

  drawFrame() {
    this.line(this.x.min, this.y.max, this.x.max, this.y.max, 'lightgrey');
    this.marker(this.x.min, '0');
    this.marker(this.x.desmond, '40');
    this.marker(this.x.first, '70');
    this.marker(this.x.max, '100');
  }

  drawTitle() {
    if (this.title !== 'false') {
      this.text(10, 20, this.title);
    }
  }

  connectedCallback() {
    ['title', 'value', 'avg'].forEach(
      a => (this[a] = this.getAttribute(a) || false),
    );

    this.shadow = this.attachShadow({ mode: 'closed' });
    this.addStyles();
    this.drawCanvas();

    this.drawFrame();
    this.drawTitle();
    this.drawGrade();
  }

  addStyles() {
    this.shadow.innerHTML = `
      <style>
      :host {
        display: inline-block;
        width: 100%;
      }
      svg {
        width: 100%;
      }
      .marker {
        stroke-width: 2px;
        stroke: rgb(98, 19, 96);
        fill: #EFE7EF;
      }
      </style>`;
  }

  get value() {
    return this.getAttribute('value');
  }

  set value(newValue) {
    this.setAttribute('value', newValue);
    this.repositionGrade();
  }
}

customElements.define('uni-grade', UniGrade);
