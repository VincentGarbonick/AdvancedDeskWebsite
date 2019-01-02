//checks to see if passed parameter is a number, a spinoff of a jquery function
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

//function for validating input to make sure it is a whole integer greater than zero
function inputValidate(n){
	if(Math.floor(n) == n && isNumeric(n) && n > 0){
		return true
	}

	else{
		return false
	}
}



function dXRoll(arg1){
	//picks random variable from one to passed value 
	result = Math.floor(Math.random() * arg1) + 1;
	
	//puts result in the area where "Resultdice" tag is in element
	document.getElementById("resultDice").innerHTML = result
	//console.log(result);

	return result
}

function dMulti(){
	var number = prompt("How many dice are you rolling?", "10");
	var size = prompt("How big are the dice you are rolling?", "6");

	if(inputValidate(number) && inputValidate(size)){
		console.log("valid input");


		var i = 0;
		var total = 0;
		var hold = 0;  

		for(i = 0; i < number; i++){
			
			hold = 0;
			hold = dXRoll(size);
			console.log(hold);
			total = total + hold; 

			document.getElementById("resultDice").innerHTML = total;

		}
	

	}

	else{
		console.log("invalid input");
	}

}

function dCustom(){
	var size = prompt("How big is the dice you are rolling?", "100");
	
	if(inputValidate(size)){

		console.log("valid");
		dXRoll(size);

	}

	else{

		console.log("NaN");
		document.getElementById("resultDice").innerHTML = "invalid input";
		alert("invalid input");

	}

}