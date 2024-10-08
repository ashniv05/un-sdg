import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
new URL('./lib/svgs/goal-1.svg', import.meta.url).href

export class unSdg extends DDDSuper(LitElement) {

  static get tag() {
    return "un-sdg";
  }

  constructor() {
    super();
    this.title = "";
    this.goal = 1;
    this.imgSrc = "";
    this.size = 254;
    this.label = "Example label";
    this.lazy = true;
  }

  static get properties() {
    return {
      title: { type: String },
      goal: { type: Number },
      size: { type: Number },
      label: { type: String },
      label: { type: Boolean },
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
        font-size: var(--un-sdg-font-size, var(--ddd-font-size-s));
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      div {
        padding: 0;
        margin: 0;
      }
    `];
  }

  updated(changedProperties) {
    if (changedProperties.has('goal')) {
      this.updateImageandAlt();
    }
  }

  updateImageandAlt() {
    const goal = this.getAttribute('goal');
    switch (goal) {
      case '1':
        this.imgSrc = "./lib/svgs/goal-1.svg";
        this.label = "Goal 1: No poverty";
        break;
      case '2':
        this.imgSrc = "./lib/svgs/goal-2.svg";
        this.label = "Goal 2: Zero hunger";
        break;
      case '3':
        this.imgSrc = "./lib/svgs/goal-3.svg";
        this.label = "Goal 3: Good health and well-being";
        break;
      case '4':
        this.imgSrc = "./lib/svgs/goal-4.svg";
        this.label = "Goal 4: Quality education";
        break;
      case '5':
        this.imgSrc = "./lib/svgs/goal-5.svg";
        this.label = "Goal 5: Gender equality";
        break;
      case '6':
        this.imgSrc = "./lib/svgs/goal-6.svg";
        this.label = "Goal 6: Clean water and sanitation";
        break;
      case '7':
        this.imgSrc = "./lib/svgs/goal-7.svg";
        this.label = "Goal 7: Affordable and clean energy";
        break;
      case '8':
        this.imgSrc = "./lib/svgs/goal-8.svg";
        this.label = "Goal 8: Decent work and economic growth";
        break;
      case '9':
        this.imgSrc = "./lib/svgs/goal-9.svg";
        this.label = "Goal 9: Industry, innovation and infrastructure";
        break;
      case '10':
        this.imgSrc = "./lib/svgs/goal-10.svg";
        this.label = "Goal 10: Reduced inequalities";
        break;
      case '11':
        this.imgSrc = "./lib/svgs/goal-11.svg";
        this.label = "Goal 11: Sustainable cities and communities";
        break;
      case '12':
        this.imgSrc = "./lib/svgs/goal-12.svg";
        this.label = "Goal 12: Responsible consumption and production";
        break;
      case '13':
        this.imgSrc = "./lib/svgs/goal-13.svg";
        this.label = "Goal 13: Climate action";
        break;
      case '14':
        this.imgSrc = "./lib/svgs/goal-14.svg";
        this.label = "Goal 14: Life below water";
        break;
      case '15':
        this.imgSrc = "./lib/svgs/goal-15.svg";
        this.label = "Goal 15: Life on land";
        break;
      case '16':
        this.imgSrc = "./lib/svgs/goal-16.svg";
        this.label = "Goal 16: Peace, justice and strong institutions";
        break;
      case '17':
        this.imgSrc = "./lib/svgs/goal-17.svg";
        this.label = "Goal 17: Partnerships for the goals";
        break;
    }
  }

  render() {
    return html`
      <div class="svg-wrapper">
        <img 
        src="${this.imgSrc}"
        width="${this.size}"
        alt="${this.label}"
        />
      </div>
    `;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(unSdg.tag, unSdg);