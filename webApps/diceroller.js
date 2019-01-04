//spits out a random rgb color for the color of the html element containing the result text
function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}


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
	
	

	//randomize color of result 
	//$(stylesheet.css).css("color", random_rgba());
	//https://stackoverflow.com/questions/566203/changing-css-values-with-javascript
	//https://stackoverflow.com/questions/23095637/how-do-you-do-a-random-rbg-in-javascript
	//https://www.google.com/search?q=changing+css+with+javascript&rlz=1C1WPZB_enUS828US828&oq=changing+css+with+javascript&aqs=chrome.0.0j69i60j0l4.10951j0j7&sourceid=chrome&ie=UTF-8
	//considering using javascript to just change inline value of the color and font size for the result box.....



	//puts result in the area where "Resultdice" tag is in element
	document.getElementById('resultDice').innerHTML = result;
	//console.log(result);
	document.getElementById('resultDice').style.color = random_rgba();
	//ok so this method works HOLY FUCK IT WORKS YES YES YES YES YES!!!!!


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