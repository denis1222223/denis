var requestInterceptor = (function() {

    var settings = {
        outputCallback: function(requestID, eventText) {
            console.log("[" + requestID + "] " + eventText);
        },
        onStart: function(requestID) {
            this.outputCallback(requestID, "start");
        },
        onProgress: function(requestID, percent) {
            this.outputCallback(requestID, "progress " + percent + "%");
        },
        onError: function(requestID) {
            this.outputCallback(requestID, "error");
        },
        onLoad: function(requestID) {
            this.outputCallback(requestID, "done");
        }
    };

    var requestID = 0;

    var XMLHttpRequest = window.XMLHttpRequest;

    var startTracing = function () {
        XMLHttpRequest.prototype.uniqueID = function() {
            if (!this.uniqueIDMemo) {
                this.uniqueIDMemo = ++requestID;
            }
            return this.uniqueIDMemo;
        };

        XMLHttpRequest.prototype.oldOpen = XMLHttpRequest.prototype.open;
        var newOpen = function(method, url, async, user, password) {
            settings.onStart(this.uniqueID());
            this.oldOpen(method, url, async, user, password);
        };
        XMLHttpRequest.prototype.open = newOpen;

        XMLHttpRequest.prototype.oldSend = XMLHttpRequest.prototype.send;
        var newSend = function(a) {
            var xhr = this;
            xhr.addEventListener("error", settings.onError.bind(settings, xhr.uniqueID()), false);
            xhr.addEventListener("load", settings.onLoad.bind(settings, xhr.uniqueID()), false);
            xhr.addEventListener('progress', function(evt) {
                if (evt.lengthComputable) {
                    var percent = Math.ceil(evt.loaded / evt.total * 100);
                    settings.onProgress.call(settings, xhr.uniqueID(), percent);
                }
            }, false);

            this.oldSend(a);
        };
        XMLHttpRequest.prototype.send = newSend;
    };

    var initialize = function(options) {
        settings = $.extend(settings, options);
    };

    var run = function() {
        startTracing();
    };

    var stop = function() {
        XMLHttpRequest.prototype.send = XMLHttpRequest.prototype.oldSend;
        XMLHttpRequest.prototype.open = XMLHttpRequest.prototype.oldOpen;
    };

    return {
        initialize: initialize,
        run: run,
        stop: stop
    }

})();