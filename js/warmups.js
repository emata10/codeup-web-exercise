"use strict";

//1. Warmup:
function seven() {
	return 7;
}

console.log(seven());
console.log(seven());

//2. Write a function that takes in a number and returns an array of numbers that are divisible within the argument.
// If the value provided is not a number, the function should return false.

function findFactors(num) {
	if (typeof num === "number" && !isNaN(num)) {
		let bucket = [];
		for (let i = 1; i <= num; i++) {
			if (num % i === 0) {
				bucket.push(i);
			}
		}
		return bucket;
	} else {
		return false;
	}
}

console.log(findFactors(6)); // returns [1,2,3,6];
console.log(findFactors(16)); // returns [1,2,4,8,16];
console.log(findFactors(0)); // returns [];
console.log(findFactors(true)); // returns false;
console.log(findFactors("13")); // returns false;
console.log(findFactors([54, 72, 144])); // returns false;
console.log(findFactors()); // returns false;

//3. May 2.
// Write a function that takes in a string and counts the instances of the letter 'e' within the argument.
// The count should be case insensitive. If the string does not contain any'e's it should return 0. If the
// argument is not a string it should return false.

function countEs(str) {
	let(str){} string.toLowerCase()
	{
		return undefined;
	}
	let normalizedStr = str.toLowerCase()
	for (let i = 0; i < str.length; i++) {
		if (normalizedStr.charAt(i) === "e") {
			count++;
		}
	}
	return count;

}


console.log(countEs("Ease")); // returns 2;
console.log(countEs("teleconference")); // returns 5;
console.log(countEs("TOM")); // returns 0;
console.log(countEs(true)); // returns false;
console.log(countEs(['e', 'E'])); // returns false;
console.log(countEs()); // returns false;

// 4. May 3,2023 // Write a function that takes in a string and counts the instances of the letter 'e' within the argument.
// The count should be case-insensitive. If the string does not contain any 'e's it should return 0. If the argument is
// not a string it should return false.
function containsE(str) {
	if(countEs(str) === false) {
		return false
	} else {
		return countEs(str) > 0
	}
}



console.log(countEs("Ease")); // returns 2;
console.log(countEs("teleconference")); // returns 5;
console.log(countEs("TOM")); // returns 0;
console.log(countEs(true)); // returns false;
console.log(countEs(['e', 'E'])); // returns false;
console.log(countEs()); // returns false;

// 5. May 4
//Write a function named fizzBuzz that prints to the console the number 1 - 100. If the number is divisible by 3 print fizz
//instead of the number. If the number is divisible by 5 print buzz. If the number is divisible by both 3 and 5 print fizzBuzz.

function fizzBuz() {
	for (i = 1; i <= 100; i++)
		if (i % 3 === 0)
			console.log("fizz")
		} else if(i % 5 === 0){
	console.log("Buzz"){
	} else {
		console.log(i)
	}

}

// 6. May 5
//Warmup: Create a do-while loop that starts at 2, and displays the number squared on each line while the number is
//less than 1,000,000. Output should equal:

function twoSquared(){
	for(let i = 2; i < 1000000; i = math.pow(i y: 2)){
		console>log(i);
	}
}

twoSquared()

2
4
16
256
65536
(edited)