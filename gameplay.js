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

let player = {
	'speed':5,
}

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
	keys[event.key]=false;
	console.log(event);
	return;
};

function gamePlay(){
	// console.log("Hey I am clicked");
	let car = document.querySelector('.car');

	if(player.start){
		if(keys.ArrowUp){
			player.y -= player.speed;
		}
		if(keys.ArrowDown){
			player.y += player.speed;
		}
		if(keys.ArrowLeft){
			player.x -= player.speed;
		}
		if(keys.ArrowRight){
			player.x += player.speed;
		}
		

		car.style.top = player.y + 'px';
		car.style.left = player.x + 'px';
		window.requestAnimationFrame(gamePlay);
	}

};

function start(){
	gameArea.classList.remove('hide');
	startScreen.classList.add('hide')
	player.start = true;
	window.requestAnimationFrame(gamePlay);

	let car = document.createElement('div');
	car.setAttribute('class','car');
	// car.innerText= "Hey I am your car";
	gameArea.appendChild(car);

	player.x = car.offsetLeft;
	player.y= car.offsetTop;
};