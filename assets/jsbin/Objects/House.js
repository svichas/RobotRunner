function House(margin=1) {

	this.x = width + 70 * margin;
	this.height = random(60, 140);
	this.width = 60;
	this.colors = [
		"#E74C3C","#E08283","#F1A9A0","#AEA8D3","#E4F1FE","#F0F0F0"
	];
	

	this.y = height-this.height-70;
	this.windowColor = "#000";

	this.top = [];

	for (i=0;i<Math.round(random(1,3));i++) {
		top_width = random(10,20);
		top_height = random(10,15);

		this.top.push({
			x: random(0, this.width-top_width),
			width: top_width,
			height: top_height
		});
	}

	this.color = Math.round(random(this.colors.length-1));
	

	this.render = function() {
	
		fill(this.colors[this.color]);

		for (i=0;i<this.top.length;i++) {
			rect(this.top[i].x+this.x, this.y, this.top[i].width, this.top[i].height);
		}
		rect(this.x, this.y, this.width, this.height);
		
		fill(this.windowColor);
		for (i=0;i<this.height-28;i+=20) {
			rect(this.x+7,this.y+10+i,10,18)
			rect(this.x+24,this.y+10+i,10,18)
			rect(this.x+41,this.y+10+i,10,18)
		}

	}

	this.offScreen = function() {
		return this.x + this.width < 0;
	}

}