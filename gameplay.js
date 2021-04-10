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
	'score':0,
}

console.log(startScreen);

document.addEventListener('keydown',keyDown);
document.addEventListener('keyup',keyUp);

function keyDown(event){
	event.preventDefault();
	keys[event.key]=true;
	// console.log(event.key);
	// console.log(keys);
	return;
};

function keyUp(event){
	event.preventDefault();
	keys[event.key]=false;
	// console.log(event);
	return;
};


function isCollide(car, enemy){
	carRect = car.getBoundingClientRect();
	enemyRect = enemy.getBoundingClientRect();

	collision = !((carRect.bottom < enemyRect.top)||(carRect.top > enemyRect.bottom)||(carRect.left > enemyRect.right)||(carRect.right <enemyRect.left))
	
	return collision 
}

function moveLines(){
	let lines = document.querySelectorAll('.lines')

	for (line of lines){

		if(line.y >= 700){
			line.y -= 750
		}

		line.y += player.speed;
		line.style.top = line.y + 'px';
	};
}

function moveEnemy(car){
	let enemies = document.querySelectorAll('.enemy')

	for (enemy of enemies){
		if(isCollide(car,enemy)){
			console.log("Boom")
		}
		if(enemy.y >= 750){
			enemy.y = -300;
			enemy.style.left = Math.floor(Math.random() * 350)+ 'px';
		}

		enemy.y += player.speed;
		enemy.style.top = enemy.y + 'px';
		
	};
};




function gamePlay(){
	// console.log("Hey I am clicked");
	let car = document.querySelector('.car');
	let road = gameArea.getBoundingClientRect();
	// console.log(road);
	if(player.start){
		// console.log("Here")
		// console.log(player.y)
		moveLines();
		moveEnemy(car);

		if(keys.ArrowUp && player.y >70){
			player.y -= player.speed;
		}
		if(keys.ArrowDown && player.y < road.height - 70){
			player.y += player.speed;
		}
		if(keys.ArrowLeft && player.x >0){
			player.x -= player.speed;
		}
		if(keys.ArrowRight && player.x < road.width - 50){
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
	player.score = 0;
	window.requestAnimationFrame(gamePlay);

	for(i=0; i<5; i++){
		let roadLine = document.createElement('div')
		roadLine.setAttribute('class','lines')
		roadLine.y = (i*150);
		roadLine.style.top = (i*150) + 'px'
		gameArea.appendChild(roadLine)
	}



	let car = document.createElement('div');
	car.setAttribute('class','car');
	// car.innerText= "Hey I am your car";
	gameArea.appendChild(car);

	player.x = car.offsetLeft;
	player.y= car.offsetTop;

	for(i=0; i<3; i++){
		let enemyCar = document.createElement('div');
		enemyCar.setAttribute('class','enemy');
		enemyCar.y = ((i+1)*350 * -1);
		enemyCar.style.top = (i*150) + 'px';
		enemyCar.style.left = Math.floor(Math.random() * 350)+ 'px';
		gameArea.appendChild(enemyCar);
	}
};