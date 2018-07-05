// console.log('we work')
let counter = 0;
var handle;
let keepGoing = true;

// 1. make canvas 
const canvas = document.getElementById('my-canvas')
console.log(canvas.height)
const ctx = canvas.getContext('2d')
// step one done

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
const secondObstacle = new Obstacle(10, 30)
secondObstacle.x = 30
const thirdObstacle = new Obstacle(20, 20)
thirdObstacle.x = 100

document.addEventListener("keydown", (evt) => {
	// up 38
  	if(evt.keyCode == 38 && player1.y > 0) {
    	console.log("I'm up")
		  
    	player1.y -= 10; // you may want to use a val much higher than 1
  	}

  	// down 40
  	if(evt.keyCode == 40 && player1.y < 120) {
  	  console.log("i'm down")
  	  // function animateCanvas() {

		  // any code here will be executed approx every 1/60th of a second
		  // counter += 1000;
		  // console.log("hey animate", counter);
  	 	 player1.y += 10; // you may want to use a val much higher than 1

  	}

		// left 37
  	if(evt.keyCode == 37 && player1.x > 0) {
    	console.log("i'm left")
    	// setInterval(function() {
    	player1.x -= 10;
  //   	if (player1.x === 0){
  //   		stop();
  //   	} // you may want to use a val much higher than 1
		//   clearCanvas();
		//   player1.paintPlayer();
		// }, 1000/60);
  	}

		// right 39
  	if(evt.keyCode == 39 && player1.x < 280) {
    	player1.x += 10; // you may want to use a val much higher than 1
    	console.log("i'm right");
	}
	// here every time I press a button it'll clear the canvas and recreate the player
	// clearCanvas();
	// player1.paintPlayer();
	// firstObstacle.paintObstical();
	// secondObstacle.paintObstical();
	// thirdObstacle.paintObstical();
})
// player1.movement();
// firstObstacle.paintObstical();
// secondObstacle.paintObstical();
// thirdObstacle.paintObstical();
// player1.paintPlayer();

function clearCanvas() {
  // this will erase the entire canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};
const game = {

	start() {
		//create 4 
			// instantiating a class 4 times and pushing into above array?
	},
	 obstacles:[firstObstacle, secondObstacle, thirdObstacle],

	 randomObstacle () {

	 	for (let i = 0; i < obstacles.length; i++) {
	 		Math.floor(Math.random() * obstacles.length - 1)
	 		[i].paintObstical()
	 	}
	}
};


	// and maybe move (= change location data)

 
	// this should be methods on the player object

// 3. player animation
let theCanvas = canvas.width
function animateCanvas()  {

  // any code here will be executed approx every 1/60th of a second
  counter ++;
  // console.log("hey animate", counter);
  firstObstacle.move()
  secondObstacle.move();
	thirdObstacle.move();
  clearCanvas();
  player1.paintPlayer();
  // write a function in obstacle class that adjusts position of obstacle downward and call that function here
  firstObstacle.paintObstical();
	secondObstacle.paintObstical();
	thirdObstacle.paintObstical();
	// here we check to see if there were any collisions and if so we stop the loop when we see that keep going has turned false
  if(firstObstacle.checkCollision() === true) {
  	keepGoing = false;
  }if (secondObstacle.checkCollision() === true) {
  	keepGoing = false;
  }if (thirdObstacle.checkCollision() === true) {
  	keepGoing = false;
  }

  // here if there was not a collision we continue
  if(keepGoing) {
	  // pass this function into w.rAF
  	handle = requestAnimationFrame(animateCanvas)
  }
}

animateCanvas();

// const stop = () => {
// 	cancelAnimationFrame(handle)
// }














































