function GUI() {


	this.render = function() {


		/*
		==================
		Draw health Bar
		==================
		*/
		health = robot.health / robot.max_health;
		
		fill("#f0f0f0");
		//draw battery
		rect(10,10,172,35);
		rect(182, 19.5, 5, 15);

		fill(this.findHealthBarColor());
		
		for (i=0;i<health*170;i+=15+2) {
			rect(12 + i, 12, 15, 31);
		}

		//draw precent
		fill("#222");
		textStyle(BOLD);
		textSize(13);
		text((Math.round(health * 100)).toString() + "%  " + Math.round(robot.health) +"/" + Math.round(robot.max_health) +" mAh", 40, 32);

	}


	this.findHealthBarColor = function() {

		colorRange = [
			"#F22613",
			"#c0392b",
			"#e74c3c",
			"#d35400",
			"#2ecc71",
			"#27ae60",
			"#26A65B"
		];

		health = (robot.health / robot.max_health);
		color_position = Math.round(health*colorRange.length)
		
		if (color_position < 1) color_position = 1;

		if (color_position > colorRange.length) color_position = colorRange.length;

		return colorRange[color_position-1];

	}

}