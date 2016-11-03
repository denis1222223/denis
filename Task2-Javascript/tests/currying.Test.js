function sum4(n1,n2,n3,n4) {
  var args = [].slice.call(arguments, 0);
    return args.reduce(function(a, b) { 
		return a + b; 
	}, 0);
}

describe('curring', function () {
	
	var curriedSum = curry(sum4, 1, 2);
	
	it('full parameters', function(){
		expect(curriedSum(3,4)).toBe(10);
	});
	
	it('overflow of parameters', function(){
		expect(curriedSum(3,4,5)).toBe(15);
	});
	
	it('partial functions', function(){
		expect(curriedSum(3)(4)).toBe(10);
	});
	
	it('not a function', function(){
		expect(function(){ curriedSum(3)(4)(5); }).toThrow()
	});
	
	it('curry full params', function(){
		var sum = curry(sum4, 1, 2, 3, 4);
		expect(sum).toBe(10);
	});
	
	it('partial of partial etc...', function(){
		var curriedSum = curry(sum4);
		expect(curriedSum(1)(2)(3)(4)).toBe(10);
	});
});