var robot,GUI;
pause = false;
var clouds = [];

function setup() {
	
	createCanvas(700,400);

	robot   = new Robot(50,50);
	GUI     = new GUI();
	terrain = new Terrain();

}


function draw() {
	noStroke();
	
	if (!pause) {
		//background color	
		terrain.render();

		// Handle Robot
		robot.handle();

		// render GUI
		GUI.render();
	}


}


function keyPressed() {
	//up
	if (keyCode == 87 || keyCode == UP_ARROW) {
		robot.fly();
	}

	if (keyCode == 80) {
		pause = !pause;
	}
}

function keyReleased() {

	//up
	if (keyCode == 87 || keyCode == UP_ARROW) {
		robot.stopFly();
	}

}