(function($) {

    $.fn.audioPlayer = function(options) {

        var settings = $.extend( {
            'name'         : 'One',
            'author'       : 'U2'
        }, options);

        this.css("background-color", "blue");

        return this;
    };

})(jQuery);