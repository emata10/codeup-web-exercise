class books {
}

(function() {
	"use strict";
	
	/**
	 * TODO:
	 * Create an object with firstName and lastName properties that are strings
	 * with your first and last name. Store this object in a variable named
	 * `person`.
	 *
	 * Example:
	 *  > console.log(person.firstName) // "Rick"
	 *  > console.log(person.lastName) // "Sanchez"
	 */
	
	var person = {firstName: "Emilia",  lastName: "Mata"}
	
	console.log(person.firstName);
	console.log(person.lastName);
	
	/**
	 * TODO:
	 * Add a sayHello method to the person object that returns a greeting using
	 * the firstName and lastName properties.
	 * console.log the returned message to check your work
	 *
	 * Example
	 * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
	 */
		person = {
			sayHello: ("Hello from" +   ( person.firstName )  +  ( person.lastName ))
		}
		
		console.log(person.sayHello);
		
	/** TODO:
		 * HEB has an offer for the shoppers that buy products amounting to
		 * more than $200. If a shopper spends more than $200, they get a 12%
		 * discount. Write a JS program, using conditionals, that logs to the
		 * browser, how much Ryan, Cameron and George need to pay. We know that
		 * Cameron bought $180, Ryan $250 and George $320. Your program will have to
		 * display a line with the name of the person, the amount before the
		 * discount, the discount, if any, and the amount after the discount.
		 *
		 * Uncomment the lines below to create an array of objects where each object
		 * represents one shopper. Use a foreach loop to iterate through the array,
		 * and console.log the relevant messages for each person
		 */
	
		
		var shoppers =  [
			  {name: 'Cameron', amount: 180},
			  {name: 'Ryan', amount: 250},
		      {name: 'George', amount: 320},
      ];
		
		shoppers.forEach(function(shopper) {
			
			let amountBeforeEachDiscount = shopper.amount
			let discount = 0
			if (shopper.amount > 200) {
				discount = shopper.amount * .012
			}
			let amountAfterDiscount = amountBeforeEachDiscount - discount;
			
			console.log(`${shopper.name}spent$ + amountBeforeEachDiscount.toFixed(2) + 'got a discount of $') + discount.toFixed(2) + 'and needs to pay $' + amountAfterDiscount.toFixed(2)`)
			
			
			/** TODO:
			 * Create an array of objects that represent books and store it in a
			 * variable named `books`. Each object should have a title and an author
			 * property. The author property should be an object with properties
			 * `firstName` and `lastName`. Be creative and add at least 5 books to the
			 * array
			 *
			 * Example:
			 * > console.log(books[0].title) // "The Salmon of Doubt"
			 * > console.log(books[0].author.firstName) // "Douglas"
			 * > console.log(books[0].author.lastName) // "Adams"
			 */
			
			var books = [
				{title: "Mickey", author: "Apple Pie", addPrice: 20},
				{title: "Minnie", author: "Orange, crush", addPrice: 40},
				{title: "Goofy", author: "Dr, Pepper", addPrice: 30},
				{title: "Donald", author: "Root, Beer", addPrice: 50},
				{title: "Pluto", author: "Cherry, Pie", addPrice: 60}
			]
			
			books.forEach(function (books) {
			
			})
			
			let Title = books.title
			let author = books.author
			if (addPrice = addPrice())
				title = author.addPrice
			let title = author, addPrice
		}})();
				
