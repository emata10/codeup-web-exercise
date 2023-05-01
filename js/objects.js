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
		if (shopper.amount > 200) {
		}
		console.log(`${shopper.name}spent$ + amountBeforeEachDiscount.toFixed(2) + 'got a discount of $') +
		discount.toFixed(2) + 'and needs to pay $' + amountAfterDiscount.toFixed(2)),
		
	let books = [
			
			title : "Count the numbers"
			   author: {
				firstName:"Micky",
				lastName: "Mouse"
			}
			},
			{
			title: "Count the shapes",
				author: {
					firstName: "Minnie",
					lastName: "Mouse",
					}
				},
				{
			title: "Whistle while we work.",
				author: {
					firstName: "Goofy",
					lastName: "Troop",
				}
			},
	{
			title: "Count to 100.",
				author: {
					firstName: "Donald",
					lastName: "Duck",
				},
			
	{
			
			"Count by twos."
				{
					firstName: "Daisy",
					lastName: "Duck",
				}
				}
			{
		
		/**
		 * TODO:
		 * Loop through the books array and output the following information about
		 * each book:
		 * - the book number (use the index of the book in the array)
		 * - the book title
		 * - author's full name (first name + last name)
		 *
		 * Example Console Output:
		 *
		 *      Book # 1
		 *      Title: The Salmon of Doubt
		 *      Author: Douglas Adams
		 *      ---
		 *      Book # 2
		 *      Title: Walkaway
		 *      Author: Cory Doctorow
		 *      ---
		 *      Book # 3
		 *      Title: A Brief History of Time
		 *      Author: Stephen Hawking
		 *      ---
		 *      ...
		 */
		
		/**
		 * Bonus:
		 * - Create a function named `createBook` that accepts a title and author
		 *   name and returns a book object with the properties described
		 *   previously. Refactor your code that creates the books array to instead
		 *   use your function.
		 * - Create a function named `showBookInfo` that accepts a book object and
		 *   outputs the information described above. Refactor your loop to use your
		 *   `
		
		function showBookInfo(strings) {
		
		}
		
		showBookInfo` function.
		
		function createBook(title, firstName, lastName) {
			let bookObject = {
				title: title,
				author: {
					firstName: firstName,
					lastName: lastName
				}
			}
			books.push(bookObject);
		}
		
		createBook("Count the numbers", "Micky", "Mouse");
		
		function showBookInfo(book) {
			return "Title: " + book.title + "\n" + "Author " + book.author.firstName + " " + book.author.lastName;
		}
		
		
		books.forEach(function (book, index) {
			console.log("Book # " + (index + 1) + "\n" + showBookInfo(book))
		}
