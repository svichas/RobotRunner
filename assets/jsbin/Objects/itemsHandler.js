var items = [];

function itemsHandler() {

	this.update = function() {

		for (var i = items.length-1; i >= 0; i--) {

			items[i].render();

		}

	}

}