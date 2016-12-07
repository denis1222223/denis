$( function() {
    $.widget( "custom.audioPlayer", {

        options: {
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
        },

        _getTime: function(seconds) {
            function addZero(number) {
                if (number < 10) {
                    return "0" + number;
                }
                return number;
            }
            var sec = seconds % 60;
            var min = (seconds - sec) / 60;
            return addZero(min) + ":" + addZero(sec);
        },

        _addPlayerMarkup: function () {
            var markup = "<div class='player-button play'><i class='fa fa-play'></i></div>" +
                "<div class='player-button stop'><i class='fa fa-stop'></i></div>" +
                "<div class='volume'></div>" +
                "<div class='player-logs'><div class='song-time'>" +
                "<div class='song-time__current'>00:00</div><div class='song-time__separator'>&nbsp;-&nbsp;</div>" +
                "<div class='song-time__duration'>00:00</div></div><div class='song-name'></div></div>" +
                "<div class='track'></div>";

            this.element.prepend(markup);
        },

        _setSongTags: function(url) {
            var element = this.element;
            ID3.loadTags(url, tags = function() {
                var tags = ID3.getAllTags(url);
                element.find(".song-name").text(tags.artist + " - " + tags.title);
            });
        },

        _setDuration: function() {
            this.element.find(".song-time__duration").text(this._getTime(Math.round(this._duration)));
        },

        _initializeAudio: function () {
            var self = this;
            this._sound = new Howl({
                src: [this.options.url],
                autoplay: false,
                loop: false,
                onplay: this.options.onplay,
                onpause: this.options.onpause,
                onstop: this.options.onstop,
                onvolume: this.options.onvolume,
                onseek: this.options.onseek,
                onend: function() {
                    self._stop();
                    console.log("end");
                },
                onload: function() {
                    self._duration = self._sound.duration();
                    self._setDuration();
                }
            });
            console.log("initialized");
            this._setSongTags(this.options.url);
        },

        _play: function() {
            this._sound.play();
            this.element.find('.play').find('i').removeClass('play').addClass('fa-pause');
            this._timer = setInterval(this._update.bind(this), 1000);
        },

        _pause: function() {
            this._sound.pause();
            this.element.find('.play').find('i').removeClass('fa-pause').addClass('fa-play');
            clearInterval(this._timer);
        },

        _update: function() {
            this.element.find(".song-time__current").text(this._getTime(Math.round(this._sound.seek())));
            if (this._allowSliderUpdate) {
                this.element.find(".track").slider('value', this._sound.seek() / this._duration * 100);
            }
        },

        _playPause: function() {
            if (!this._sound.playing()) {
                this._play();
            } else {
                this._pause();
            }
        },

        _stop: function() {
            this._sound.stop();
            this.element.find(".song-time__current").text("00:00");
            this.element.find(".track").slider('value', 0);
            this._pause();
        },

        _initializeVolumeSlider: function() {
            var self = this;
            self.element.find(".volume").slider({
                orientation: "vertical",
                range: "min",
                value: 50,
                slide: function (event, ui) {
                    self._sound.volume(self.element.find(".volume").slider('value') / 100);
                }
            });
        },

        _initializeTrackSlider: function() {
            var self = this;
            self.element.find(".track").slider({
                orientation: "horizontal",
                range: "min",
                value: 0,
                start: function(event, ui) {
                    self._allowSliderUpdate = false;
                },
                stop: function(event, ui) {
                    self._sound.seek(self._duration * self.element.find(".track").slider('value') / 100);
                    self._update();
                    self._allowSliderUpdate = true;
                }
            });
        },

        _initializeButtons: function() {
            this.element.find('.play').click(this._playPause.bind(this));
            this.element.find('.stop').click(this._stop.bind(this));
        },

        _initializeContols: function () {
            this._initializeVolumeSlider();
            this._initializeTrackSlider();
            this._initializeButtons();
        },

        _initialize: function() {
            this._addPlayerMarkup();
            this._initializeAudio();
            this._initializeContols();
        },

        _create: function () {
            this._initialize();
        },

        _setOption: function (key, value) {
            switch (key) {
                case "url":
                    this.options.url = value;
                    this._stop();
                    this._initializeAudio();
                    break;
            }
        }
    });
});