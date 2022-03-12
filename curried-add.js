function curriedAdd(total) {
	if (total === undefined) return 0;
	return function addNext(num) {
	  if (num === undefined) return total;
	  total += num;
	  return addNext;
	};
}
module.exports = { curriedAdd };


// Write a function called curriedAdd. If you give this function a number, 
// it returns a new function to you. If you give this function no arguments, 
// it returns the total of all the numbers you’ve passed to it so far.

// let firstAdder = curriedAdd();
// let secondAdder = curriedAdd();
// let thirdAdder = curriedAdd();

// firstAdder(); // 0
// secondAdder(1)(2)(); // 3
// thirdAdder(2)(8)(5)(1)(); // 16

// function curry(f) { // curry(f) does the currying transform
// 	return function(a) {
// 	  return function(b) {
// 	    return f(a, b);
// 	  };
// 	};
// }
      
//       // usage
//       function sum(a, b) {
// 	   return a + b;
//       }
      
//       let curriedSum = curry(sum);
      
//       alert( curriedSum(1)(2) ); // 3