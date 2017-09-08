var items = [];

function itemsHandler() {

	this.update = function() {

		for (var i = items.length-1; i >= 0; i--) {

			items[i].render();

			//check if collision
			px1 = robot.x;
			px2 = robot.x + robot.width;
			py1 = robot.y;
			py2 = robot.y + robot.height;
			//console.log("robot:"+px1 + ", "+px2 + ", "+py1 + ", "+py2);
			ix1 = items[i].x;
			ix2 = items[i].x + items[i].width;
			iy1 = items[i].y;
			iy2 = items[i].y + items[i].height;
			//console.log("item:"+ix1 + ", "+ix2 + ", "+iy1 + ", "+iy2);

			if (
				(((px1 < ix1 && px2 > ix1) ||
				(ix1 < px1 && ix2 > px1))) &&
				(((py1 < iy1 && py2 > iy1) ||
				(iy1 < py1 && iy2 > py1))) 
			) {

				// remove item if return true
				if (items[i].onCollision()) {
					items.splice(i,1);
					return false;
				}
			
			}

			//remove item if its out of screen
			if (items[i].x < 0 || items[i].y > height) {
				items.splice(i,1);
				return false;
			}


		}



	}

}