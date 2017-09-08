function EnergyItem(x,y) {

	this.x = x;
	this.y = y;
	this.width = 40;
	this.height = 40;
	this.img = loadImage("assets/imgbin/Items/energy.png");

	this.render = function() {
		fill("#111");


		this.x -= scrollSpeed;

		//rect(this.x,this.y,this.width,this.height);
		image(this.img, this.x, this.y, this.width, this.height);

		this.gravityEff();
	}

	this.onCollision = function() {
		
		robot.addEnergy(20);

		return true;
	}

	// item is effected by grttavity
	this.gravityEff = gravityEffect;

}