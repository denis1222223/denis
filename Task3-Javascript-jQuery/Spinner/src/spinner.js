$( function() {
    $.widget( "custom.spinner", {

        running: false,

        options: {
            src: "img/1.gif"
        },

        show: function() {
            if (!this.running) {
                this.running = true;
                var mask = $("<div class='mask'></div>");
                var spinnerAnim = $("<img src='" + this.options.src + "'>");
                mask.html(spinnerAnim);
                this.element.prepend(mask);
            }
        },

        hide: function() {
            this.running = false;
            this.element.find(".mask").remove();
        },

        wrap: function(promise) {
            this.show();
            var self = this;
            promise.then(function() {
                self.hide();
            }, function(error) {
                console.log(error);
            });
            return promise;
        }

    });
});