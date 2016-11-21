$( function() {
    $.widget( "custom.spinner", {

        running: false,

        options: {
            src: "img/1.gif",
            blockUi: true
        },

        show: function() {
            if (!this.running) {
                this.running = true;
                var mask = $("<div class='mask'></div>");
                var spinnerAnim = $("<img class='spinnerImg' src='" + this.options.src + "'>");
                mask.html(spinnerAnim);
                if (this.options.blockUi) {
                    this.element.prepend(mask);
                } else {
                    this.element.prepend(spinnerAnim);
                }

            }
        },

        hide: function() {
            this.running = false;
            if (this.options.blockUi) {
                this.element.find(".mask").remove();
            } else {
                this.element.find(".spinnerImg").remove();
            }
        },

        wrap: function(promise) {
            this.show();
            var self = this;
            promise.then(function() {
                self.hide();
            }, function(error) {
                self.hide();
            });
            return promise;
        }

    });
});