function AdvertiseTable() {

	this.x = width;
	this.y = 0;
	this.imgs = {
		"fiat": loadImage("assets/imgbin/fiat.png"),
		"alfa": loadImage("assets/imgbin/alfa.jpg"),
		"fiat2": loadImage("assets/imgbin/fiat2.jpg")
	};



	this.width = 80;
	this.table_height = 55;
	this.column_height = random(40, 60);
	this.column_width = 8;
	this.texts = [
		"O thomas \neinai noobas",
		"alfa",
		"Ante geia!",
		"alfa",
		"fiat",
		"fiat",
		"fiat",
		"fiat2",
		"fiat2"
	];



	this.text = this.texts[Math.round(random(0,this.texts.length-1))];
	///alert(Math.round(random(0,this.texts.length-1)));



	this.render = function() {

		fill("#333");
		rect(this.x+15, height-70-this.column_height, this.column_width, this.column_height);
		rect(this.x+this.width - 15, height-70-this.column_height, this.column_width, this.column_height);


		fill("#f0f0f0");
		rect(this.x, height-70-this.column_height-this.table_height, this.width+15, this.table_height);

		fill("red");
		if (typeof this.imgs[this.text] == 'undefined') text(this.text, this.x + 4, height-50-this.column_height-this.table_height)
		else {
			image(this.imgs[this.text], this.x + 5, height-65-this.column_height-this.table_height, this.width - 10, this.table_height - 10);
		}

	}


}