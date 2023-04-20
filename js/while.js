"use strict";

(function() {


	let x = 1
	while (x < 65536) {
		console.log(x);
		x *= 1;
	}

	let allCones = Math.floor(Math.random() * 51) + 50;

	do {
		let conesToSell = Math.floor(Math.random() * 5) + 1;
		if(allCones >= conesToSell) {
			allCones -= conesToSell;
			console.log(`Customer is purchasing ${conesToSell} cones. Only ${allCones} left!`)
		} else {
			console.log(`Sorry! I cannot sell ${conesToSell}cones. We only have ${allCones} left!`)
		}
	} while (allCones !== 0)
})();