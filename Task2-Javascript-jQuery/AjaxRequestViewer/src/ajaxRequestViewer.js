(function($) {

    $.fn.audioPlayer = function(options) {

        var settings = $.extend( {
            'name'         : 'The Times They Are Changin',
            'author'       : 'Bob Dylan',
            'src'          : 'music/bob_dylan_the_times_they_are_a_changin.mp3'
        }, options);

        

        return this;
    };

})(jQuery);