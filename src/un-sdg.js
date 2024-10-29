import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class UnSDG extends DDDSuper(LitElement) {
  static get tag() {
    return "un-sdg";
  }

  constructor() {
    super();
    this.goal = "circle";
    this.boxWidth = "254px";
    this.boxHeight = "254px";
    this.title = "";
    this.colorOnly = false;
    this.img = new URL('../lib/svgs/goal-1.svg', import.meta.url).href;
  }

  static get properties() {
    return {
      goal: { type: String, reflect: true },
      title: { type: String },
      boxHeight: { type: String },
      boxWidth: { type: String },
      colorOnly: { type: Boolean },
    };
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          --un-sdg-goal-1: rgb(235, 28, 44);
          --un-sdg-goal-2: rgb(210, 160, 42);
          /* Add remaining colors here for other goals */
          display: block;
          width: var(--width, 254px);
          height: var(--height, 254px);
          background-color: white;
        }
        .svg-wrapper {
          width: var(--width, 254px);
          height: var(--height, 254px);
          padding: 0;
          margin: 0;
        }
        img {
          width: 100%;
          height: 100%;
        }
      `,
    ];
  }

  updated(changedProperties) {
    if (changedProperties.has("goal")) {
      this._updateGoal();
    }
  }

  _updateGoal() {
    const titles = {
      circle: "Sustainable Development Logo",
      all: "All Sustainable Development Goals",
      1: "Goal 1: No Poverty",
      2: "Goal 2: Zero Hunger",
      3: "Goal 3: Good Health and Well-Being",
      4: "Goal 4: Quality Education",
      5: "Goal 5: Gender Equality",
      6: "Goal 6: Clean Water and Sanitation",
      7: "Goal 7: Affordable and Clean Energy",
      8: "Goal 8: Decent Work and Economic Growth",
      9: "Goal 9: Industry, Innovation and Infrastructure",
      10: "Goal 10: Reduced Inequalities",
      11: "Goal 11: Sustainable Cities and Communities",
      12: "Goal 12: Responsible Consumption and Production",
      13: "Goal 13: Climate Action",
      14: "Goal 14: Life Below Water",
      15: "Goal 15: Life on Land",
      16: "Goal 16: Peace, Justice and Strong Institutions",
      17: "Goal 17: Partnerships for the Goals"
    };

    this.title = titles[this.goal] || "Unknown Goal";
  }

  render() {
    let img = new URL(`/lib/svgs/goal-${this.goal}.svg`, import.meta.url).href;

    if (this.goal === "all") {
      img = new URL(`/lib/svgs/${this.goal}.svg`, import.meta.url).href;
    } else if (this.goal === "circle") {
      img = new URL(`/lib/svgs/${this.goal}.png`, import.meta.url).href;
    }

    return html`
      <style>
        :host {
          --width: ${this.boxHeight};
          --height: ${this.boxWidth};
        }
      </style>
      <div
        class="svg-wrapper"
        style="background-color: var(--un-sdg-goal-${this.goal});"
      >
        ${this.colorOnly
          ? ``
          : html`<img src="${img}" alt="${this.title}" loading="lazy" />`}
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(UnSDG.tag, UnSDG);
