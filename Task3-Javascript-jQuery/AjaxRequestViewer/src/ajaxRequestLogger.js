var requestInterceptor = (function() {

    var settings = {
        outputCallback: function(requestID, eventText) {
            console.log("[" + requestID + "] " + eventText);
        },
        onStart: function(requestID) {
            this.outputCallback(requestID, "start");
        },
        onProgress: function(requestID) {
            this.outputCallback(requestID, "progress...");
        },
        onError: function(requestID) {
            this.outputCallback(requestID, "error");
        },
        onLoad: function(requestID) {
            this.outputCallback(requestID, "done");
        }
    };

    var XMLHttpRequest = window.XMLHttpRequest;

    var startTracing = function () {
        XMLHttpRequest.prototype.uniqueID = function() {
            if (!this.uniqueIDMemo) {
                this.uniqueIDMemo = Math.floor(Math.random() * 1000);
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
            settings.onProgress(this.uniqueID());
            var xhr = this;
            xhr.addEventListener("error", settings.onError.bind(settings, xhr.uniqueID()), false);
            xhr.addEventListener("load", settings.onLoad.bind(settings, xhr.uniqueID()), false);
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