(function(){
	"use strict";
	
	var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
	var planetsArray;
	
	/**
	 * TODO:
	 * Convert planetsString to an array, and save it in a variable named
	 * planetsArray.
	 * console.log planetsArray to check your work
	 */
	
	var planets = ["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"];
	var planetsAsString = planets.join("|");
	console.log(planetsAsString);
	
	
	/**
	 * TODO:
	 * Create a string with <br> tags between each planet. con
	 * sole.log() your
	 * results. Why might this be useful?
	 *
	 * BONUS:
	 * Create another string that would display your planets in an unordered
	 * list. You will need an opening AND closing <ul> tags around the entire
	 * string, and <li> tags around each planet.
	 */
	
	// var listPlanets = "<ul>" + "<li>" + planetsString.split("|") + "</li>" + "</ul>";
	
	var listPlanets = planetsString.split("|");
	var brlistPlanets = "<ul>" + "<li>" + listPlanets.join("</li><li>") + "</li>" + "</ul>";
	console.log(listPlanets);
	console.log(brlistPlanets);
	
	
	var data = ["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune" ];
	
	var listPlanets = document.getElementById("listPlanets");
	
	data.forEach((listPlanets)=>{
		let li = document.createElement("li");
		li.innerText = listPlanets;
		list.appendChild(li);
	
	})
	
	
	
})();