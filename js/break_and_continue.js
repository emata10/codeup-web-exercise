"use strict";


(function(){
	let numToSkip;

	while (true) {
		numToSkip = parseInt(prompt("Give me an odd number between 1 and 50!"));
		if (numToSkip >= 1 && numToSkip <= 50 && numToSkip % 2 !== 0) {
			break;
		}

	for (let i = 1; i < 50; i += 2) {
		if (i === numToSkip) {
			console.log(`Opps! Skipping ${numToSkip}`);
			continue;
		}
		console.log(i);
	}   }

})()






