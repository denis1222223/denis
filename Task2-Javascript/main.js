require.config({
	baseUrl: '../tests', 
	paths: {
		'jasmine': ['jasmine/jasmine'],
        'jasmine-html': ['jasmine/jasmine-html'],
        'jasmine-boot': ['jasmine/boot']
	},

	shim: {
		'jasmine-html': {
			deps: ['jasmine']
		},
		'jasmine-boot': {
			deps : ['jasmine', 'jasmine-html']
		}
	}
});

require(['jasmine-boot'], function() {
	require([
		'bind.Test', 
		'curry.Test', 
		'linearFold.Test',
		'linearUnfold.Test', 
		'map.Test', 
		'filter.Test', 
		'averageEven.Test', 
		'sumRandom.Test', 
		'first.Test', 
		'lazyEvaluation.Test', 
		'lazyMemoEvaluation.Test'
	], function() {
		window.onload();
	})
});