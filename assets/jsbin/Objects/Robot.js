function Robot(x,y) {

	this.y = x;
	this.x = y;
	
	this.width = 50;
	this.height = 110;

	this.falling = false;
	this.flying = false;


	this.max_health = 400;
	this.health = 400;

	//this.humanImage = ("assets/imgbin/Human.png");

	this.handle = function() {
		this.render();
		this.update();
	}

	this.render = function() {
		fill(255);
		rect(this.x,this.y,this.width,this.height);
	}

	this.update = function() {

		this.health -= 0.05;

		if (this.flying) {
			
			if (this.y > 10) this.y -= 6.3; 

			this.health -= 0.2;
		}


		if (!this.flying&&(this.y + this.height < height - 25)) {
			this.y += 15;
			this.falling = true;
		} else {
			this.falling = false;
		}


	}


	this.fly = function() {
		this.flying = true;
	}

	this.stopFly = function() {
		this.flying = false;
	}


}