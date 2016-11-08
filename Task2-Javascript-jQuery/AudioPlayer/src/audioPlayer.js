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
                slide: function(event, ui) {
                    $("#amount").val(ui.value);
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

        initialize();

        var buttonPlay = this.find('.play');
        var buttonStop = this.find('.play');
        buttonPlay.click(play);
        buttonStop.click(stop);

        return this;
    };

})(jQuery);