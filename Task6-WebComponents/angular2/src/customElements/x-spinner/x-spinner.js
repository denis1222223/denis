(function(window, document) {
    var ownerDocument =  (document._currentScript || document.currentScript).ownerDocument;
    var template = ownerDocument.querySelector('#template').content;

    var elementPrototype = Object.create(HTMLElement.prototype);

    elementPrototype.createdCallback = function() {
        this._count = 1;
        var shadowRoot = this.createShadowRoot();
        var clone = document.importNode(template, true);
        shadowRoot.appendChild(clone);
    };

    elementPrototype.show = function() {
        if (this._count === 0) {
            this.removeAttribute("hidden");
        }
        this._count++;
    };

    elementPrototype.hide = function() {
        if (this._count > 0) {
            this._count--;
        }
        if (this._count === 0) {
            this.setAttribute("hidden", true);
        }
    };

    document.registerElement('x-spinner', {prototype: elementPrototype });
})(window, document);