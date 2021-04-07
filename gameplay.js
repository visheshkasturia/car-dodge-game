const score = document.querySelector(".score");
const startScreen = document.querySelector(".start-screen");
const gameArea = document.querySelector(".game-area");


startScreen.addEventListener('click',start);

let keys = {
	'ArrowUp':false,
	'ArrowDown':false,
	'ArrowRight': false,
	'ArrowLeft': false
};

console.log(startScreen);

document.addEventListener('keydown',keyDown);
document.addEventListener('keyup',keyUp);

function keyDown(event){
	event.preventDefault();
	keys[event.key]=true;
	console.log(event.key);
	console.log(keys);
	return;
};

function keyUp(event){
	event.preventDefault();
	keys[event.key]=true;
	console.log(event);
	return;
};

function gamePlay(){

}

function start(){
	window.requestAnimationFrame(gamePlay);
};