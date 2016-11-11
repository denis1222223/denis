// (function($) {
//
//     $.fn.audioPlayer = function(options) {
//
//         var settings = $.extend( {
//             'name'         : 'The Times They Are Changin',
//             'author'       : 'Bob Dylan',
//             'src'          : 'music/bob_dylan_the_times_they_are_a_changin.mp3'
//         }, options);
//
//
//
//         return this;
//     };
//
// })(jQuery);

$( function() {
    $.widget( "custom.ajaxRequestViewer", {

        options: {

        },

        _create: function() {
            
            // this.element
            // // add a class for theming
            //     .addClass( "custom-colorize" );
            //
            // this.changer = $( "<button>", {
            //     text: "change",
            //     "class": "custom-colorize-changer"
            // })
            //     .appendTo( this.element )
            //     .button();
            //
            // // Bind click events on the changer button to the random method
            // this._on( this.changer, {
            //     // _on won't call random when widget is disabled
            //     click: "random"
            // });
            // this._refresh();
        },

        // // Called when created, and later when changing options
        // _refresh: function() {
        //     this.element.css( "background-color", "rgb(" +
        //         this.options.red +"," +
        //         this.options.green + "," +
        //         this.options.blue + ")"
        //     );
        //
        //     // Trigger a callback/event
        //     this._trigger( "change" );
        // },

        // // A public method to change the color to a random value
        // // can be called directly via .colorize( "random" )
        // random: function( event ) {
        //     var colors = {
        //         red: Math.floor( Math.random() * 256 ),
        //         green: Math.floor( Math.random() * 256 ),
        //         blue: Math.floor( Math.random() * 256 )
        //     };
        //
        //     // Trigger an event, check if it's canceled
        //     if ( this._trigger( "random", event, colors ) !== false ) {
        //         this.option( colors );
        //     }
        // },

        // // Events bound via _on are removed automatically
        // // revert other modifications here
        // _destroy: function() {
        //     // remove generated elements
        //     this.changer.remove();
        //
        //     this.element
        //         .removeClass( "custom-colorize" )
        //         .enableSelection()
        //         .css( "background-color", "transparent" );
        // },

        // // _setOptions is called with a hash of all options that are changing
        // // always refresh when changing options
        // _setOptions: function() {
        //     // _super and _superApply handle keeping the right this-context
        //     this._superApply( arguments );
        //     this._refresh();
        // },
        //
        // // _setOption is called for each individual option that is changing
        // _setOption: function( key, value ) {
        //     console.log("colorise(option, colorsObj)");
        //     // prevent invalid color values
        //     if ( /red|green|blue/.test(key) && (value < 0 || value > 255) ) {
        //         return;
        //     }
        //     this._super( key, value );
        // }
    });
} );