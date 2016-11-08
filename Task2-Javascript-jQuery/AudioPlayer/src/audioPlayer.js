(function($) {

    $.fn.audioPlayer = function(options) {

        var settings = $.extend( {
            'name'         : 'The Times They Are Changin',
            'author'       : 'Bob Dylan',
            'src'          : '../music/the_times_they_are_a_changin.mp3'
        }, options);

        var audio = new Audio();

        function initializeAudio() {
            audio.src = settings.src;
            audio.autoplay = false;
        }

        function play() {
            audio.play();
            console.log("playing");
        }

        initializeAudio();
        var playButton = this.find('.play');
        console.log(playButton);
        playButton.click(play);

        return this;
    };

})(jQuery);