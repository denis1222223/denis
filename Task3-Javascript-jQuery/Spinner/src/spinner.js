var spinner = (function() {

    var settings = {
        src: "img/1.gif",
        blockUi: true
    };

    var spinCount = 0;

    var spinnerAnim = $("<img class='spinnerImg' src='" + settings.src + "'>");
    var spinnerMasked = $("<div class='mask'></div>").html(spinnerAnim);

    var initialize = function(options) {
        settings = $.extend(settings, options);
    };

    var show = function() {
        if (spinCount == 0) {
            if (settings.blockUi) {
                settings.output.prepend(spinnerMasked);
            } else {
                settings.output.prepend(spinnerAnim);
            }
        }
        spinCount++;
    };

    var hide = function() {
        spinCount--;
        if (spinCount == 0) {
            if (settings.blockUi) {
                settings.output.find(".mask").remove();
            } else {
                settings.output.find(".spinnerImg").remove();
            }
        }
    };

    var wrap = function(promise) {
        show();
        promise.done(hide);
        return promise;
    };

    return {
        initialize: initialize,
        show: show,
        hide: hide,
        wrap: wrap
    }

})();