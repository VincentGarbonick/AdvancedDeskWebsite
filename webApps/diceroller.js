function dXRoll(arg1){
	result = Math.floor(Math.random() * arg1) + 1;
	document.getElementById("resultDice").innerHTML = result
	console.log(result);
}

function dMulti(){
	var person = prompt("Please enter your name", "Harry Potter");

	if (person != null) {
 	 	document.getElementById("result").innerHTML =
  		"Hello " + person + "! How are you today?";
	}
	else{
		var test = prompt("suck my meat", "Burger")
	}
}

function dCustom(){
	var size = prompt("How big is the dice you are rolling?", "100");
	dXRoll(size)
}