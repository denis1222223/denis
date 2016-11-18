var requestInterceptor = (function() {

    var output;
    var xhr;

    function initialize(options) {
        output = options.output;
        xhr = $.ajaxSettings.xhr();
    }

    function start() {
        xhr.addEventListener('progress', function(evt) {
            if (evt.lengthComputable) {
                var percentComplete = Math.ceil(evt.loaded / evt.total * 100);
                output.text(percentComplete + "%");
                console.log(percentComplete + "%");
            }
        }, false);
    }

    function pause() {
        console.log(d);
    }

    function stop() {
        xhr.addEventListener('progress', function(evt) {
        }, false);
    }

    return {
        initialize: initialize,
        start: start,
        pause: pause,
        stop: stop
    }
})();

// requestInterceptor.prototype.initialize =

// (function() {
//
//     var requestInterceptor = function () {
//
//         var randNumber = Math.random();
//
//         this.someMethod = function () {
//             console.log(randNumber);
//         };
//
//         this.randomized = randNumber;
//
//     };
//     console.log("dfg");
// })();