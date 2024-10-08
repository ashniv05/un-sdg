import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
new URL('./lib/svgs/goal-1.svg', import.meta.url).href

export class unSdg extends DDDSuper(LitElement) {

  static get tag() {
    return "un-sdg";
  }

  constructor() {
    super();
    this.goal = "circle";
    this.imgSrc = "./lib/svgs/circle.png";
    this.width = "254px";
    this.height = "254px";
    this.label = "Sustainable developments logo";
    this.loading = "lazy"
    this.fetchPriority = "low";
    this.colorOnly = "false";
    this.isImageVisible = "true";
  }

  static get properties() {
    return {
      goal: { type: String },
      imgSrc: { type: String },
      width: { type: String },
      height: { type: String },
      label: { type: String },
      loading: { type: String },
      fetchPriority: { type: String },
      colorOnly: { type: String },
      isImageVisible: { type: String },
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        /*
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
        font-size: var(--un-sdg-font-size, var(--ddd-font-size-s));
        */
        width: var(--width, 254px);
        height: var(--height, 254px);
        background-color: white;
        --un-sdg-goal-1: rgb(235, 28, 44);
        --un-sdg-goal-2: rgb(210, 160, 42);
        --un-sdg-goal-3: rgb(44, 155, 72);
        --un-sdg-goal-4: rgb(194, 31, 51);
        --un-sdg-goal-5: rgb(239, 64, 42);
        --un-sdg-goal-6: rgb(0, 173, 216);
        --un-sdg-goal-7: rgb(253, 183, 19);
        --un-sdg-goal-8: rgb(143, 23, 55);
        --un-sdg-goal-9: rgb(243, 109, 36);
        --un-sdg-goal-10: rgb(224, 21, 131);
        --un-sdg-goal-11: rgb(249, 157, 37);
        --un-sdg-goal-12: rgb(207, 141, 42);
        --un-sdg-goal-13: rgb(72, 119, 61);
        --un-sdg-goal-14: rgb(0, 125, 187);
        --un-sdg-goal-15: rgb(63, 175, 73);
        --un-sdg-goal-16: rgb(1, 85, 138);
        --un-sdg-goal-17: rgb(25, 54, 103);
      }
      .svg-wrapper {
        /*
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
        */
        padding: 0;
        margin: 0;
      }
      .hidden {
        visibility: hidden;
      }
      img {
        width: 100%;
        height: 100%;
      }
    `];
  }

  updated(changedProperties) {
    if (changedProperties.has('width')) {
      this.style.setProperty('--width', this.width);
    }
    if (changedProperties.has('height')) {
      this.style.setProperty('--height', this.height);
    }
    if (changedProperties.has('goal')) {
      this.updateImageandAlt();
      this.updateColor();
    } 
    if (changedProperties.has('colorOnly') && this.colorOnly == "true") {
      this.isImageVisible = false;
    }
    else if (changedProperties.has('colorOnly') && this.colorOnly == "false") {
      this.isImageVisible = true;
    }
    if (changedProperties.has('loading')) {
      const loading = this.getAttribute('loading');
      switch (loading) {
        case 'lazy':
          this.loading = "lazy";
          break;
        case 'eager':
          this.loading = "eager";
          break;
      }
    }
    if (changedProperties.has('fetchPriority')) {
      const fetchPriority = this.getAttribute('fetchPriority');
      switch (fetchPriority) {
        case 'low':
          this.fetchPriority = "low";
          break;
        case 'high':
          this.fetchPriority = "high";
          break;
      }
    }
  }

  updateColor() { 
    const goal = this.getAttribute('goal'); 
    switch (goal) {
      case '1':
        this.style.setProperty('background-color', 'var(--un-sdg-goal-1, white)');
        break;
      case '2':
        this.style.setProperty('background-color', 'var(--un-sdg-goal-2, white)');
        break;
      case '3':
        this.style.setProperty('background-color', 'var(--un-sdg-goal-3, white)');
        break;
      case '4':
        this.style.setProperty('background-color', 'var(--un-sdg-goal-4, white)');
        break;
      case '5':
        this.style.setProperty('background-color', 'var(--un-sdg-goal-5, white)');
        break;
      case '6':
        this.style.setProperty('background-color', 'var(--un-sdg-goal-6, white)');
        break;
      case '7':
        this.style.setProperty('background-color', 'var(--un-sdg-goal-7, white)');
        break;
      case '8':
        this.style.setProperty('background-color', 'var(--un-sdg-goal-8, white)');
        break;
      case '9':
        this.style.setProperty('background-color', 'var(--un-sdg-goal-9, white)');
        break;
      case '10':
        this.style.setProperty('background-color', 'var(--un-sdg-goal-10, white)');
        break;
      case '11':
        this.style.setProperty('background-color', 'var(--un-sdg-goal-11, white)');
        break;
      case '12':
        this.style.setProperty('background-color', 'var(--un-sdg-goal-12, white)');
        break;
      case '13':
        this.style.setProperty('background-color', 'var(--un-sdg-goal-13, white)');
        break;
      case '14':
        this.style.setProperty('background-color', 'var(--un-sdg-goal-14, white)');
        break;
      case '15':
        this.style.setProperty('background-color', 'var(--un-sdg-goal-15, white)');
        break;
      case '16':
        this.style.setProperty('background-color', 'var(--un-sdg-goal-16, white)');
        break;
      case '17':
        this.style.setProperty('background-color', 'var(--un-sdg-goal-17, white)');
        break;
    }  
  }
  updateImageandAlt() {
    const goal = this.getAttribute('goal');
    switch (goal) {
      case 'circle':
        this.imgSrc = "./lib/svgs/circle.png";
        this.label = "Sustainable developments logo";
        break;
      case 'all':
        this.imgSrc = "./lib/svgs/all.svg";
        this.label = "Goal 1: No poverty, Goal 2: Zero hunger, Goal 3: Good health and well-being, Goal 4: Quality education, Goal 5: Gender equality, Goal 6: Clean water and sanitation, Goal 7: Affordable and clean energy, Goal 8: Decent work and economic growth, Goal 9: Industry, innovation and infrastructure, Goal 10: Reduced inequalities, Goal 11: Sustainable cities and communities, Goal 12: Responsible consumption and production, Goal 13: Climate action, Goal 14: Life below water, Goal 15: Life on land, Goal 16: Peace, justice and strong institutions, Goal 17: Partnerships for the goals";
        break;
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

  // class="${this.isImageVisible ? '' : 'hidden'}"
  // class="${this.isImageVisible ? valueIfTrue : valueIfFalse}"
  render() {
    return html`
      <div class="svg-wrapper">
        <img 
        class="${this.isImageVisible ? '' : 'hidden'}"
        src="${this.imgSrc}"
        alt="${this.label}"
        loading="${this.loading}"
        fetchpriority="${this.fetchPriority}"
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