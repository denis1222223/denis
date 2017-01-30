class Spinner extends HTMLElement {
    constructor() {
        super();
    }

    createdCallback() {
        this._count = 1;
        this.render();
    }

    render() {
        var shadowRoot = this.createShadowRoot();
        this.setMarkup(shadowRoot);
        this.setStyle(shadowRoot);
    }

    show() {
        if (this._count === 0) {
            this.removeAttribute("hidden");
        }
        this._count++;
    }

    hide() {
        if (this._count > 0) {
            this._count--;
        }
        if (this._count === 0) {
            this.setAttribute("hidden", true);
        }
    }

    setMarkup(shadowRoot) {
        var link = document.querySelector('#spinner-markup');
        var content = link.import.querySelector('.spinner-wrapper');
        var clone = document.importNode(content, true);
        shadowRoot.appendChild(clone);
    }
    
    setStyle(element) {
        element.innerHTML += `
            <link rel="stylesheet" type="text/css" href="/src/customElements/x-spinner/x-spinner.css" />
        `;
    }
}

export default Spinner;