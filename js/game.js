var guessTarget = document.querySelector("h1#guessTarget");
var newColors = document.querySelector("div#generate");
var tryAgain = document.querySelector("div#hint");
var easyMode = document.querySelector("div#easy");
var hardMode = document.querySelector("div#hard");
var divs = document.querySelectorAll("div#colorDiv");
var title = document.querySelector("div#title");
var targetDiv = Math.floor(Math.random()*6);
var range = divs.length;



easyMode.addEventListener("click", function(){
	var mark = range;
	this.classList.add("active");
	hardMode.classList.remove("active");
	targetDiv = Math.floor(Math.random()*3);
	range = 3;
	for(var i = 3; i < divs.length; i++){
		divs[i].style.display = "none";
	}
	if(mark == 6){
		game();
	}
});

hardMode.addEventListener("click", function(){
	var mark = range;
	this.classList.add("active");
	easyMode.classList.remove("active");
	targetDiv = Math.floor(Math.random()*6);
	for(var i = 3; i < divs.length; i++){
		divs[i].style.display = "block";
	}
	range = 6;
	if(mark == 3){
		game();
	}
});

document.addEventListener("DOMContentLoaded", game);
newColors.addEventListener('click', game);

function initGame(){
	newColors.textContent = "NEW COLORS";
	tryAgain.textContent = "TRY AGAIN";
	tryAgain.style.color = "rgb(255, 255, 255)";
	title.style.backgroundColor = "rgb(70, 130, 180)";
	targetDiv = Math.floor(Math.random()*range);
	for(var i =0; i < range; i++){
		if(i === targetDiv){
			var colorString = newRGB();
			divs[i].style.backgroundColor = colorString; 
			guessTarget.textContent = colorString.toUpperCase();	
		}else{
			divs[i].style.backgroundColor = newRGB(); 
		}
	}
}

function gameProcess(){
	for(var i = 0; i < range; i++){
		divs[i].addEventListener('click', addDivEvent);
	}
	for(var i = range; i < divs.length; i++){
		divs[i].removeEventListener('click', addDivEvent);
	}
}

function newRGB() {
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256); 
	return "rgb("+r+", "+g+", "+b+")";
}

function addDivEvent(){
	if(this.style.backgroundColor.toUpperCase() == guessTarget.textContent){
		title.style.backgroundColor = this.style.backgroundColor;
		for(var j = 0; j < range; j++){
			divs[j].style.backgroundColor = this.style.backgroundColor;
		}
		newColors.textContent = "PLAY AGAIN?";
		tryAgain.textContent = "Correct!";
		tryAgain.style.color = "rgb(0, 0, 0)";
	}else{
		this.style.backgroundColor = "rgb( 0, 0, 0)";
		tryAgain.style.color = "rgb(0, 0, 0)";
	}
}

function game(){
	initGame();
	gameProcess();
}
