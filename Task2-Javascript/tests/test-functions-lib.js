define([], function(){

    var testLibrary = (function() {

		function sum() {
			var args = [].slice.call(arguments, 0);
			return args.reduce(function(a, b) { 
				return a + b; 
			}, 0);
		}

		function mult() {
			var args = [].slice.call(arguments, 0);
			return args.reduce(function(a, b) { 
				return a * b;
			}, 1);
		}

		function sum4(n1,n2,n3,n4) {
		  var args = [].slice.call(arguments, 0);
			return args.reduce(function(a, b) { 
				return a + b; 
			}, 0);
		}

		function inc(value) {
			return ++value;
		}
			
		function dec(value) {
			return --value;
		}

		function isDivisibleByFive(number) {
			return number % 5 == 0 ? true : false;
		}

		function isLessThanTen(number) {
			return number < 10 ? true : false;
		}

		function isEven(number) {
			return number % 2 == 0 ? true : false;
		}

		function average(arr) {
			return sum.apply(null, arr) / arr.length;
		}	

		function getRandomNumber(low, high) {
			return Math.random() * (high - low) + low;
		}
		
		return {
			sum: sum,
			mult: mult,
			sum4: sum4,
			inc: inc,
			dec: dec,
			isDivisibleByFive: isDivisibleByFive,
			isLessThanTen: isLessThanTen,
			isEven: isEven,
			average: average,
			getRandomNumber: getRandomNumber
		};
		
    })();
	
	return testLibrary;
	
})