$( function() {
    $.widget( "custom.ajaxRequestViewer", {

        options: {
            requestSettings: {
                cache: false
            },
            guiSettings: {
                output: $("body"),
                color: "#62b4e8",
                backgroundColor: "#c1c1c1",
                width: "100px",
                height: "20px"
            }
        },

        send: function() {
            $.ajax(this.options.requestSettings);
        },

        setMarkup: function() {
            var progressBar = $("<div class='progressBar'>" +
                "<div class='progress'></div>" +
                "</div>");

            progressBar.width(this.options.guiSettings.width);
            progressBar.height(this.options.guiSettings.height);
            progressBar.css("background-color", this.options.guiSettings.backgroundColor);
            progressBar.find(".progress").css("background-color", this.options.guiSettings.color);

            this.options.guiSettings.output.append(progressBar);
        },

        setRequestHandler: function() {
            var output = this.options.guiSettings.output;

            this.options.requestSettings.xhr = function() {
                var xhr = $.ajaxSettings.xhr();
                xhr.addEventListener('progress', function(evt) {
                    if (evt.lengthComputable) {
                        var percentComplete = Math.ceil(evt.loaded / evt.total * 100);
                        output.find(".progress").width(percentComplete + "%");
                    }
                }, false);
                return xhr;
            }
        },

        _create: function() {
            this.setMarkup();

            this.element.on( "click", function() {
                $(this).ajaxRequestViewer("send");
            });

            this.setRequestHandler();
        }
    });
});