(function($) {

    $.fn.audioPlayer = function(options) {

        var settings = $.extend({
            onplay: function() {
                console.log("play");
            },
            onpause: function() {
                console.log("pause");
            },
            onstop: function() {
                console.log("stop");
            },
            onvolume: function() {
                console.log("volume");
            },
            onseek: function() {
                console.log("seek");
            }
        }, options);

        var sound;
        var duration = 0;

        var playerDOM = this;
        var timer;
        var allowSliderUpdate = true;
        // var markupRendered = false;

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

        function update() {
            playerDOM.find(".song-time__current").text(getTime(Math.round(sound.seek())));
            if (allowSliderUpdate) {
                playerDOM.find(".track").slider('value', sound.seek() / duration * 100);
            }
        }

        function play() {
            sound.play();
            playerDOM.find('.play').find('i').removeClass('play').addClass('fa-pause');
            timer = setInterval(update, 1000);
        }

        function pause() {
            sound.pause();
            playerDOM.find('.play').find('i').removeClass('fa-pause').addClass('fa-play');
            clearInterval(timer);
        }

        function playPause() {
            if (!sound.playing()) {
                play();
            } else {
                pause();
            }
        }

        function stop() {
            sound.stop();
            playerDOM.find(".song-time__current").text("00:00");
            playerDOM.find(".track").slider('value', 0);
            pause();
        }

        function initializeAudio() {
            sound = new Howl({
                src: [settings.url],
                autoplay: false,
                loop: false,
                onplay: settings.onplay,
                onpause: settings.onpause,
                onstop: settings.onstop,
                onvolume: settings.onvolume,
                onseek: settings.onseek,
                onend: function() {
                    stop();
                    console.log("end");
                },
                onload: function() {
                    duration = sound.duration();
                    setDuration();
                }
            });
            setSongTags(settings.url);
        }

        function setDuration() {
            playerDOM.find(".song-time__duration").text(getTime(Math.round(duration)));
        }

        function setSongTags(url) {
            ID3.loadTags(url, tags = function() {
                var tags = ID3.getAllTags(url);
                playerDOM.find(".song-name").text(tags.artist + " - " + tags.title);
            });
        }

        function addPlayerMarkup() {
            var markup = "<div class='player-button play'><i class='fa fa-play'></i></div>" +
                "<div class='player-button stop'><i class='fa fa-stop'></i></div>" +
                "<div class='volume'></div>" +
                "<div class='player-logs'><div class='song-time'>" +
                "<div class='song-time__current'>00:00</div><div class='song-time__separator'>&nbsp;-&nbsp;</div>" +
                "<div class='song-time__duration'>00:00</div></div><div class='song-name'></div></div>" +
                "<div class='track'></div>";

            playerDOM.prepend(markup);
        }

        function initializeVolumeSlider() {
            playerDOM.find(".volume").slider({
                orientation: "vertical",
                range: "min",
                value: 50,
                slide: function (event, ui) {
                    sound.volume(playerDOM.find(".volume").slider('value') / 100);
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
                    sound.seek(duration * playerDOM.find(".track").slider('value') / 100);
                    update();
                    allowSliderUpdate = true;
                }
            });
        }

        function initializeButtons() {
            playerDOM.find('.play').click(playPause);
            playerDOM.find('.stop').click(stop);
        }

        function initializeContols() {
            initializeVolumeSlider();
            initializeTrackSlider();
            initializeButtons();
        }

        function initialize() {
            if (!playerDOM.data("markupRendered")) {
                addPlayerMarkup();
                initializeContols();
                playerDOM.data("markupRendered", true);
            }

            initializeAudio();//////////////////////////////////////////to do
            pause();
            stop();
        }

        if (settings.url) {
            initialize();
        } else {
            console.log("url required");
        }

        return this;
    };

})(jQuery);