var robot,GUI,itemsHandler;
pause = false;
gameover = false;

var clouds,messages = [];
var gravity = 15;

function setup() {
	
	createCanvas(1000,400);
	

	pause    = false;
	gameover = false;
	clouds   = [];
	gravity  = 15;
	items    = [];

	robot        = new Robot(50,50);
	GUI          = new GUI();
	terrain      = new Terrain();
	itemsHandler = new itemsHandler();

}


function draw() {
	noStroke();
	
	if (!pause && !gameover) {
		//background color	
		terrain.render();

		// Handle Robot
		robot.handle();

		// render GUI
		GUI.render();

		// items handler
		itemsHandler.update();

		//messages

		for (var i = messages.length-1; i >= 0; i--) {
			
			fill(messages[i].color);

			text(messages[i].message, messages[i].x, messages[i].y);
			

			if (messages[i].life > 78 ) {
				messages[i].y += random(3,4);
			} else {
				messages[i].y -= random(5,6);
			}

			if (messages[i].dir) {
				messages[i].x += random(3,4);
			} else {
				messages[i].x -= random(3,4);
			}

			messages[i].life += 10;

			if (messages[i].life > 300) {
				messages.splice(i, 1);
			}
		}

	}

	if (gameover) {

		text("Press (R) to play again.", 100, 100);

	}


}
function keyPressed() {
	console.log(keyCode);
	//up
	if (keyCode == 87 || keyCode == UP_ARROW) {
		robot.fly();
	}

	if (keyCode == 80) {
		pause = !pause;
	}

	if (keyCode == 82) {
		setup();
	}
}

function keyReleased() {

	//up
	if (keyCode == 87 || keyCode == UP_ARROW) {
		robot.stopFly();
	}

}

function throwMessage(message="",x=0,y=0,color="#000") {

	messages.push({
		"message": message,
		"x": x+(random(-30,30)),
		"y": y+(random(-30,30)),
		"life": 0,
		"color": color,
		"dir": Math.round(random(1))
	});

}


function gravityEffect() {
	if ((this.y + this.height < height - 25)) {
		this.y += gravity-5;
	}
}