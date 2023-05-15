/*"use strict";

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
*/
// 5. May 4
//Write a function named fizzBuzz that prints to the console the number 1 - 100. If the number is divisible by 3 print fizz
//instead of the number. If the number is divisible by 5 print buzz. If the number is divisible by both 3 and 5 print fizzBuzz.

/*function fizzBuz() {
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
65536*/

// Write a function that takes in an array of numbers and returns all of the numbers added together (We'll be assuming
// that only arrays are going to be used with this function).//
/*function addEmUp(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}


// console.log(addEmUp([2,6,19])); // returns 27
// console.log(addEmUp([-99, 180, -5])); // returns 76
// console.log(addEmUp([44,10,7])); // returns 61
// console.log(addEmUp([-100])); // returns -100
// console.log(addEmUp([1,2,3,4,5,6,7,8,9,10])); // returns 55
// console.log(addEmUp([-13, -92, -3500])) // returns -3605*/

// Write a function that takes in a string and returns an object describing the string. The object should have a string
// property that contains the original string, a numberOfEs property that contains a count of the number of e's in the
// string (case-insensitive), and a isEvenLength property that contains a boolean for whether the string's length is even or not.

// function explainString(str) {
// 	const numberOfEs = (str.match(/e/ig) || []).length;
// 	return {
// 		string: str,
// 		numberOfEs,
// 		isEvenLength:str.length % 2 === 0
// 	};
// }


// // 8. May 12  // Write a function that takes in an array of objects and returns an array containing all the names from
// // the original array.
// function extractNames(hamsters) {
// 	const namesArray = [];
// 	hamsters.forEach(hamster => {
// 		namesArray.push(hamster.name);
// 	});
// 	return namesArray;
//
// }

// May 15 // Write a function that takes in an array of objects and returns the object with the largest heightInMM
// property


function largestObjectByHeight(objects) {
	let largestObject = objects[0];
	for (let i = 1; i < objects.length; i++) {
		if (objects[i].heightInMM > largestObject.heightInMM) {
			largestObject = objects[i];
		}
	}
	return largestObject;
}


let animal = {
	name: "Boss",
	heightInMM: 120,
	fur: ['brown', 'white'],
	gender: "male",
	dateOfBirth: "September 21"
};

console.log(animal.name); // output: "Boss"
console.log(animal.heightInMM); // output: 120
console.log(animal.fur); // output: ["brown", "white"]
console.log(animal.gender); // output: "male"
console.log(animal.dateOfBirth); // output: "September 21"


