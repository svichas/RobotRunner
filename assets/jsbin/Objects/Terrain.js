
var houses = [];

var advertice_tables = [];

function Terrain() {

	this.start = 0;
	this.render = function() {

		background("#3498db");

		/*
		Render road
		*/

		
		fill("#34495e");
		rect(0, height-70, width, 70);

		fill(255);
		for (i=0;i<width+(-1*this.start);i+=100) {
			rect(i+(this.start),height-45,55, 18);
		}

		if (frameCount % 120 == 0) {
			//clouds.push(new Cloud());
			for (i=1;i<=random(1,8);i++) {
				houses.push(new House(i));
			}
		}


		if (frameCount % 80 == 0) {
			//clouds.push(new Cloud());
			advertice_tables.push(new AdvertiseTable());
			
		}


		if (frameCount % Math.round(random(80,160)) == 0) {
			items.push(new EnergyItem(width, height-100));
		}

		for (var i = houses.length-1; i >= 0; i--) {
			houses[i].x -= scrollSpeed;
			houses[i].render();
			if (houses[i].offScreen()) {
				houses.splice(i, 1);
			}
		}

		for (var i = advertice_tables.length-1; i >= 0; i--) {
			advertice_tables[i].x -= scrollSpeed;
			advertice_tables[i].render();
			if (advertice_tables[i].x + advertice_tables[i].width < 0) {
				advertice_tables.splice(i, 1);
			}
		}

		this.start-= scrollSpeed;

		if (this.start < -1*width) {
			this.start = 0;
		}

	}


}