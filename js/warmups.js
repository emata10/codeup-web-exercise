"use strict";

//1. Warmup:
function seven() {
	return 7;
}

console.log(seven());
console.log(seven());

//2. Write a function that takes in a number and returns an array of numbers that are divisible within the argument. If the value provided is not a number, the function should return false.

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
console.log(findFactors({value: 64})); // returns false;
console.log(findFactors()); // returns false;