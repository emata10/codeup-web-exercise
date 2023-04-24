(function(){
	"use strict";

	/**
	 * TODO:
	 * Create an array of 4 people's names and store it in a variable called
	 * 'names'.
	 */
		var names = ["Destiny", "Nialani", "Joanna", "Alex"];
			console.log(names)
	
	/**
	 * TODO:
	 * Create a log statement that will log the number of elements in the names
	 * array.
	 */
		console.log(names.length);
		
	
	
	/**
	 * TODO:
	 * Create log statements that will print each of the names individually by
	 * accessing each element's index.
	 */
		names.forEach(element => console.log(element));

	/**
	 * TODO:
	 * Write some code that uses a for loop to log every item in the names
	 * array.
	 */
	
		var names = ['Destiny', ' Nialani', 'Joanna', 'Alex'];
			for (var element of names) {
				console.log(element)
			}
	/**
	 * TODO:
	 * Refactor your above code to use a `forEach` loop
	 */
	
		const name = ['Destiny', 'Nialani', 'Joanna', 'Alex'];
		name.forEach(element => console.log(element));
	
	
	
	/**
	 * TODO:
	 * Create the following three functions, each will accept an array and
	 * return an an element from it
	 * - first: returns the first item in the array
	 * - second: returns the second item in the array
	 * - last: returns the last item in the array
	 *
	 * Example:
	 *  > first([1, 2, 3, 4, 5]) // returns 1
	 *  > second([1, 2, 3, 4, 5]) // returns 2
	 *  > last([1, 2, 3, 4, 5]) // return 5
	 */
	
	var numbers = ['1', '2', '3', '4', '5'];
	
	console.log('There are ' + numbers.length + ' numbers in the array');
	
	console.log('The first number is: ' + numbers[0]);

	
	console.log('The second number is: ' + numbers[1]);

	
	console.log('The fifth number is: ' + numbers[4]);

})();