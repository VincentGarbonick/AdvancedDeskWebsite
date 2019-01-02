//checks to see if passed parameter is a number, a spinoff of a jquery function
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}





function dXRoll(arg1){
	//picks random variable from one to passed value 
	result = Math.floor(Math.random() * arg1) + 1;
	
	//puts result in the area where "Resultdice" tag is in element
	document.getElementById("resultDice").innerHTML = result
	console.log(result);
}

function dMulti(){
	var number = prompt("How many dice are you rolling?", "10");
	var size = prompt("How big are the dice you are rolling?", "6");

}

function dCustom(){
	var size = prompt("How big is the dice you are rolling?", "100");
	
	if(Math.floor(size) == size && isNumeric(size) && size > 0){

		console.log("valid");
		dXRoll(size);

	}

	else{

		console.log("NaN");
		document.getElementById("resultDice").innerHTML = "invalid input";
		alert("invalid input");

	}

}