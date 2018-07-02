console.log('we work')

// 1. make canvas 
const canvas = document.getElementById('my-canvas')
const ctx = canvas.getContext('2d')
// step one done

// 2. player shape ---

// start with player class
class Player {
	constructor(x, y) {
	// player is a class, these are the properties for its location.
		this.x = 550;
		this.y = 400;
	}
	makePlayer(){
		ctx.beginPath();
		ctx.fillStyle = "#990000";
		ctx.rect(this.x, this.y, 100, 100)
		ctx.fill();
		ctx.closePath();
	}
}
const player1 = new Player();
player1.makePlayer();

	// player has methods to draw itself, 
	// and maybe move (= change location data)

 
// 3. player movement
	// this should be methods on the player object

// 4. obstacle shapes -- stationary, based on data in an object.  Should you have an Obstacle class? (porobably so)


// 3. player animation
