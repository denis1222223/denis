(function($) {

    $.fn.audioPlayer = function(options) {

        var settings = $.extend( {
            'name'         : 'The Times They Are Changin',
            'author'       : 'Bob Dylan',
            'src'          : '../music/the_times_they_are_a_changin.mp3'
        }, options);

        var audio = new Audio();
        var buttonPlay = this.find('.play');
        var buttonStop = this.find('.play');

        function initializeAudio() {
            audio.src = settings.src;
            audio.autoplay = false;
        }

        function play() {
            if (audio.paused) {
                audio.play();
                buttonPlay.find('i').removeClass('play').addClass('fa-pause');
            } else {
                audio.pause();
                buttonPlay.find('i').removeClass('fa-pause').addClass('fa-play');
            }
        }

        function stop() {
            audio.stop;
        }

        initializeAudio();
        buttonPlay.click(play);
        buttonStop.click(stop);

        return this;
    };

})(jQuery);