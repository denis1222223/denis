(function($) {

    $.fn.audioPlayer = function(options) {

        var settings = $.extend( {
            'name'         : 'The Times They Are Changin',
            'author'       : 'Bob Dylan',
            'src'          : 'music/bob_dylan_the_times_they_are_a_changin.mp3'
        }, options);

        var playerDOM = this;
        var audio = new Audio();

        function addPlayerMakeup() {
            var markup = "<div class='player-button play'><i class='fa fa-play'></i></div>" +
                "<div class='player-button stop'><i class='fa fa-stop'></i></div>" +
                "<div class='volume'></div>" +
                "<div class='player-logs'><div class='song-time'>0:0 - 0:0</div><div class='song-name'>" +
                settings.author + " - " + settings.name + "</div></div>" +
                "<div class='track'></div>";

            playerDOM.prepend(markup);
        }

        function initializeAudio() {
            audio.src = settings.src;
            audio.autoplay = false;
        }

        function initializeVolumeSlider() {
            playerDOM.find(".volume").slider({
                orientation: "vertical",
                range: "min",
                value: 50,
                slide: function (event, ui) {
                    audio.volume = playerDOM.find(".volume").slider('value') / 100;
                }
            });
        }

        function initializeTrackSlider() {
            playerDOM.find(".track").slider({
                orientation: "horizontal",
                range: "min",
                value: 0,
                change: function(event, ui) {
                    audio.currentTime = audio.duration * playerDOM.find(".track").slider('value') / 100;
                }
            });
        }

        function initialize() {
            addPlayerMakeup();
            initializeVolumeSlider();
            initializeTrackSlider();
            initializeAudio();
        }

        function play() {
            audio.play();
            buttonPlay.find('i').removeClass('play').addClass('fa-pause');
        }

        function pause() {
            audio.pause();
            buttonPlay.find('i').removeClass('fa-pause').addClass('fa-play');
        }

        function playPause() {
            if (audio.paused) {
                play();
            } else {
                pause();
            }
        }

        function stop() {
            audio.currentTime = 0;
            pause();
        }

        initialize();

        var buttonPlay = this.find('.play');
        var buttonStop = this.find('.stop');
        buttonPlay.click(playPause);
        buttonStop.click(stop);
        audio.ended(stop);
        return this;
    };

})(jQuery);