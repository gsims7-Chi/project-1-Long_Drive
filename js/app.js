// 1. make canvas 
// step one done
const canvas = document.getElementById('my-canvas')
console.log(canvas.height)
const ctx = canvas.getContext('2d')
// console.log('we work')
let counter = 0;
var handle;
let keepGoing = true;
const random = () => {
	return Math.floor(Math.random() * canvas.width)
}

// 2. player shape ---

// start with player class
class Player {
	constructor() {
	// player is a class, these are the properties for its location.
		this.x = 125;
		this.y = 120;
		this.height = 20;
		this.width = 30
	}
	// player has a method to draw itself 
	paintPlayer(){
		ctx.beginPath();
		ctx.rect(this.x, this.y, this.height, this.width);
		ctx.fillStyle = "#990000";
		ctx.fill();
		ctx.closePath();
	}
	// 3. player movement
	movement(){

	}
}

// 4. obstacle shapes -- stationary, based on data in an object.  Should you have an Obstacle class? (porobably so)
class Obstacle {
	constructor(height, width){
		this.x = 150;
		this.y = 0;
		this.height = height
		this.width = width
	}
	paintObstical(){
		ctx.beginPath();
		ctx.rect(this.x, this.y, this.height, this.width);
		ctx.fillStyle = "black"
		ctx.fill();
		ctx.closePath();
	}
	move() { 
		this.y++
		// console.log("i'm moving") This was a check
	}
	checkCollision() {
		// using yesterday's discussion 
		
		// let weHit = false
		if (player1.x + player1.width >= this.x && player1.x < this.x + this.width && player1.y + player1.height > this.y && player1.y < this.y + this.height === true)  {
			// console.log("i'm working")
			
			return true
		}
		return false
	}
}


const player1 = new Player();
const firstObstacle = new Obstacle(10, 10)
firstObstacle.x = random();
const secondObstacle = new Obstacle(10, 30)
secondObstacle.x = random();
const thirdObstacle = new Obstacle(20, 20)
thirdObstacle.x = random();

document.addEventListener("keydown", (evt) => {
	// up 38
  	if(evt.keyCode == 38 && player1.y > 0) {
    	console.log("I'm up")
		  
    	player1.y -= 10; // you may want to use a val much higher than 1
  	}

  	// down 40
  	if(evt.keyCode == 40 && player1.y < 120) {
  	  console.log("i'm down")
  	  
  	 	 player1.y += 10; // you may want to use a val much higher than 1

  	}

		// left 37
  	if(evt.keyCode == 37 && player1.x > 0) {
    	console.log("i'm left")
    	
    	player1.x -= 10;
  	}

		// right 39
  	if(evt.keyCode == 39 && player1.x < 280) {
    	player1.x += 10; // you may want to use a val much higher than 1
    	console.log("i'm right");
	}
});

function clearCanvas() {
  // this will erase the entire canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

const game = {
	
	obstacles: [],
	// obstacles: [firstObstacle, secondObstacle, thirdObstacle],

	
	createObs() {
		this.obstacles.push(firstObstacle, secondObstacle, thirdObstacle);
	},
	paintObs() {

		for (let i = 0; i < this.obstacles.length; i++) {
			this.obstacles[i].paintObstical();
			console.log(this.obstacles[i])
		}
	},
	posReset(){

		for (let i = 0; i < this.obstacles.length; i++) {
			if (this.obstacles[i].y === canvas.height) {
				this.obstacles[i].y = 0;
				this.obstacles[i].x = random();
			}
		}
	},
	obsManagement(){
		
		if(frameCounter > 0 && this.obstacles[0].y < canvas.height) {
			this.obstacles[0].paintObstical();
			this.obstacles[0].move();
		}
		if(this.obstacles[0].y === canvas.height && this.obstacles[1].y < canvas.height){
			this.obstacles[1].paintObstical();
			this.obstacles[1].move();
		}
		if (this.obstacles[1].y === canvas.height && this.obstacles[2].y < canvas.height) {
			this.obstacles[2].paintObstical();
			this.obstacles[2].move();
		}
		if (this.obstacles[2].y === canvas.height){
			frameCounter = 0;
			this.posReset()
		}
	}
}
game.createObs();


  

// 3. player animation section
let frameCounter = 0; 


function animateCanvas() {

  // any code here will be executed approx every 1/60th of a second
  // counter ++;
  // console.log("hey animate", counter);
  
  clearCanvas();
  player1.paintPlayer();
  // write a function in obstacle class that adjusts position of obstacle downward and call that function here

  // game.moveObs
  // game.randomObstacle(); --> game.paintObs()
	frameCounter++
	// console.log(frameCounter)
	game.obsManagement();

		
  // here we check to see if there were any collisions and if so we stop the loop when we see that keep going has turned false

  for (let i = 0; i < game.obstacles.length; i++) {
  	  // console.log(game.[i])
	  if ( game.obstacles[i].checkCollision() === true) {
	  	keepGoing = false;
	  }

  	}
	// here if there was not a collision we continue
	if(keepGoing) {
		// pass this function into w.rAF
		handle = requestAnimationFrame(animateCanvas)
	}
}

animateCanvas()

// const stop = () => {
// 	cancelAnimationFrame(handle)
// }














































