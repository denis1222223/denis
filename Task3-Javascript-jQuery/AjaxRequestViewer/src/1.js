$( function() {
    // the widget definition, where "custom" is the namespace,
    // "colorize" the widget name
    $.widget( "custom.colorize", {
        // default options
        options: {
            red: 255,
            green: 0,
            blue: 0,

            // Callbacks
            change: function() { console.log("change"); },
            random: null
        },

        // The constructor
        _create: function() {
            console.log("created");
            // Bind click events on the changer button to the random method
            this._on( this.element, {
                // _on won't call random when widget is disabled
                click: "random",
                mouseenter: "myHover"
            });
            this._refresh();
        },

        // Called when created, and later when changing options
        _refresh: function() {
            this.element.css( "background-color", "rgb(" +
                this.options.red +"," +
                this.options.green + "," +
                this.options.blue + ")"
            );
            console.log("refreshed");
            // // Trigger a callback/event
            this._trigger( "change" );
        },

        myHover: function(event) {
            this.element.css("backgroundColor","#e2e3e3");
            console.log(" super hover");
        },

        // A public method to change the color to a random value
        // can be called directly via .colorize( "random" )
        random: function( event ) {
            console.log("random");
            var colors = {
                red: Math.floor( Math.random() * 256 ),
                green: Math.floor( Math.random() * 256 ),
                blue: Math.floor( Math.random() * 256 )
            };

            // Trigger an event, check if it's canceled
            if ( this._trigger( "random", event, colors ) !== false ) {
                this.option( colors );
            }
        },

        // Events bound via _on are removed automatically
        // revert other modifications here
        _destroy: function() {
            console.log("destroy");
            // remove generated elements
            this.changer.remove();

            this.element
                .removeClass( "custom-colorize" )
                .enableSelection()
                .css( "background-color", "transparent" );
        },

        // _setOptions is called with a hash of all options that are changing
        // always refresh when changing options
        _setOptions: function() {
            // _super and _superApply handle keeping the right this-context
            this._superApply( arguments );
            this._refresh();
        },

        // _setOption is called for each individual option that is changing
        _setOption: function( key, value ) {
            // prevent invalid color values
            if ( /red|green|blue/.test(key) && (value < 0 || value > 255) ) {
                return;
            }
            this._super( key, value );
        }
    });
} );