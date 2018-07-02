console.log('we work')

// 1. make canvas 
const canvas = document.getElementById('my-canvas')
console.log(canvas.width);
console.log(canvas.height);
const ctx = canvas.getContext('2d')
// step one done

// 2. player shape ---

// start with player class
class Player {
	constructor() {
	// player is a class, these are the properties for its location.
		this.x = 125;
		this.y = 120;
	}
	// player has a method to draw itself 
	paintPlayer(){
		ctx.beginPath();
		ctx.rect(this.x, this.y, 20, 30);
		ctx.fillStyle = "#990000";
		ctx.fill();
		ctx.closePath();
	}
	// 3. player movement
	movement(){
	}
}


const game = {
	// obstacles: [];

	start() {
		//create 4 obstacles
			// instantiating a class 4 times and pushing into above array?
	}
};

// 4. obstacle shapes -- stationary, based on data in an object.  Should you have an Obstacle class? (porobably so)
class Obstacle {
	constructor(){
		this.x = 150;
		this.y = 0;
	}
	paintOpstical(){
		ctx.beginPath();
		ctx.rect(this.x, this.y, 10, 10);
		ctx.fillStyle = "black"
		ctx.fill();
		ctx.closePath();
	}
}

const player1 = new Player();
const firstObstacle = new Obstacle()

document.addEventListener("keydown", (evt) => {
	// up 38
  	if(evt.keyCode == 38 && player1.y > 0) {
    	player1.y -= 10; // you may want to use a val much higher than 1
    	console.log("I'm up")

  	}

  	// down 40
  	if(evt.keyCode == 40 && player1.y < 120) {
  	  player1.y += 10; // you may want to use a val much higher than 1
  	  console.log("i'm down")
  	  let counter = 0;
  	}

		// left 37
  	if(evt.keyCode == 37 && player1.x > 0) {
    	player1.x -= 10; // you may want to use a val much higher than 1
    	console.log("i'm left")
  	}

		// right 39
  	if(evt.keyCode == 39 && player1.x < 280) {
    	player1.x += 10; // you may want to use a val much higher than 1
    	console.log("i'm right");
	}
	// here every time I press a button it'll clear the canvas and recreate the player
	clearCanvas();
	player1.paintPlayer();
	firstObstacle.paintOpstical();
})
// player1.movement();
firstObstacle.paintOpstical();
player1.paintPlayer();

function clearCanvas() {
  // this will erase the entire canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

	// and maybe move (= change location data)

 
	// this should be methods on the player object



// 3. player animation
let counter = 0;
function animateCanvas() {

  // any code here will be executed approx every 1/60th of a second
  counter ++;
  console.log("hey animate", counter);
  
  clearCanvas();
  player1.paintPlayer();


  // pass this function into w.rAF
  window.requestAnimationFrame(animateCanvas)
}

 animateCanvas();














































