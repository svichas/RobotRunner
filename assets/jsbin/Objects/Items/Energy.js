function EnergyItem(x,y) {

	this.x = x;
	this.y = y;
	this.width = 20;
	this.height = 20;
	this.img = loadImage("assets/imgbin/Items/energy.png");

	this.render = function() {
		fill("#111");
		//rect(this.x,this.y,this.width,this.height);
		image(this.img, this.x, this.y, this.width, this.height);

		this.gravityEff();
	}

	this.onCollision = function() {
		robot.health += 20;
		throwMessage("+ 20 mAh", robot.x, robot.y);
	}

	// item is effected by grttavity
	this.gravityEff = gravityEffect;

}