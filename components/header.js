// I used this guide to make this web component
// https://dev.to/anuradha9712/create-reusable-web-components-in-html-1llc

class Header extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
        // write element functionality in here
        const shadowRoot = this.attachShadow({ mode: 'open' });
    }
}