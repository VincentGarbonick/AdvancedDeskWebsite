
function githubLink(){
	location.replace("https://github.com/VincentGarbonick")
}

function navigate(URL){
	location.replace(URL);
}

function returnMain(){
	location.replace('/main.html')
}

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}