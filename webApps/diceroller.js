function d6Roll(){
	result = Math.floor(Math.random() * 6) + 1;
	document.getElementById("resultDice").innerHTML = result
	console.log(result);
}