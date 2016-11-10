(function($) {

    $.fn.audioPlayer = function(options) {

        var settings = $.extend( {
            'name'         : 'The Times They Are Changin',
            'author'       : 'Bob Dylan',
            'src'          : 'music/bob_dylan_the_times_they_are_a_changin.mp3'
        }, options);

        var playerDOM = this;
        var audio = new Audio();
        var timer;
        var allowSliderUpdate = true;

        function getTime(seconds) {
            function addZero(number) {
                if (number < 10) {
                    return "0" + number;
                }
                return number;
            }
            var sec = seconds % 60;
            var min = (seconds - sec) / 60;
            return addZero(min) + ":" + addZero(sec);
        }

        function addPlayerMakeup() {
            var markup = "<div class='player-button play'><i class='fa fa-play'></i></div>" +
                "<div class='player-button stop'><i class='fa fa-stop'></i></div>" +
                "<div class='volume'></div>" +
                "<div class='player-logs'><div class='song-time'>" +
                "<div class='song-time__current'>00:00</div><div class='song-time__separator'>&nbsp;-&nbsp;</div>" +
                "<div class='song-time__duration'>00:00</div></div><div class='song-name'>" +
                settings.author + " - " + settings.name + "</div></div>" +
                "<div class='track'></div>";

            playerDOM.prepend(markup);
        }

        function initializeAudio() {
            audio.src = settings.src;
            audio.autoplay = false;
            audio.addEventListener('loadedmetadata', function() {
                playerDOM.find(".song-time__duration").text(getTime(Math.round(audio.duration)));
            });
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
                start: function(event, ui) {
                    allowSliderUpdate = false;
                },
                stop: function(event, ui) {
                    audio.currentTime = audio.duration * playerDOM.find(".track").slider('value') / 100;
                    update();
                    allowSliderUpdate = true;
                }
            });
        }

        function initialize() {
            addPlayerMakeup();
            initializeAudio();
            initializeVolumeSlider();
            initializeTrackSlider();
        }

        function update() {
            playerDOM.find(".song-time__current").text(getTime(Math.round(audio.currentTime)));
            if (allowSliderUpdate) {
                playerDOM.find(".track").slider('value', audio.currentTime / audio.duration * 100);
            }
        }

        function play() {
            audio.play();
            buttonPlay.find('i').removeClass('play').addClass('fa-pause');
            timer = setInterval(update, 1000);
        }

        function pause() {
            audio.pause();
            buttonPlay.find('i').removeClass('fa-pause').addClass('fa-play');
            clearInterval(timer);
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
            playerDOM.find(".track").slider('value', 0);
            pause();
        }

        initialize();

        var buttonPlay = this.find('.play');
        var buttonStop = this.find('.stop');
        buttonPlay.click(playPause);
        buttonStop.click(stop);
        // if (audio.ended) {stop;}
        return this;
    };

})(jQuery);