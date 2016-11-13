$( function() {
    $.widget( "custom.spinner", {

        running: false,

        options: {
            output: $("body"),
            backgroundColor: "",
            src: "img/1.gif",
            duration: 2000,
        },

        spin: function() {
            if (!this.running) {
                this.running = true;
                this.setMarkup();
                setTimeout(function () {
                    this.options.output.find('.spinner').remove();
                    this.running = false;
                }.bind(this), this.options.duration);
            }
        },

        setMarkup: function() {
            var spinner = $("<div class='spinner'><img src='" + this.options.src + "'></div>");
            this.options.output.append(spinner);
            this.options.output.find(".spinner").css("background-color", this.options.backgroundColor);
        },

        _create: function() {
            this.element.on( "click", function() {
                $(this).spinner("spin");
            });
        }
    });
});