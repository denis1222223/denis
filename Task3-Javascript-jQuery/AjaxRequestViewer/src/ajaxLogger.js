$( function() {
    $.widget( "custom.ajaxLogger", {

        _create: function() {
           console.log("hello world");
        }
    });
});
