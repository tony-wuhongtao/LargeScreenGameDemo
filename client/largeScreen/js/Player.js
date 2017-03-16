/**************************************************
** GAME PLAYER CLASS
**************************************************/
var Player = function(startX, startY, color) {
	var x = startX,
		y = startY,
		color = color,
		id,
		moveAmount = 2;

	// Getters and setters
	var getX = function() {
		return x;
	};

	var getY = function() {
		return y;
	};

	var setX = function(newX) {
		x = newX;
	};

	var setY = function(newY) {
		y = newY;
	};

	var getColor = function() {
		return color;
	};

	var setColor = function(newColor) {
		color = newColor;
	};

	// Update player position
	var update = function(keys) {
		// Previous position
		var prevX = x,
			prevY = y;

		// Up key takes priority over down
		if (keys.up) {
			y -= moveAmount;
		} else if (keys.down) {
			y += moveAmount;
		};

		// Left key takes priority over right
		if (keys.left) {
			x -= moveAmount;
		} else if (keys.right) {
			x += moveAmount;
		};

		return (prevX != x || prevY != y) ? true : false;
	};

	var updateMove = function(devOris) {

		var prevX = x,
			prevY = y;

		// Up key takes priority over down
		if (devOris.up) {
			y -= 1;
		} else if (devOris.down) {
			y += 1;
		};

		// Left key takes priority over right
		if (devOris.left) {
			x -= 1;
		} else if (devOris.right) {
			x += 1;
		};

		return (prevX != x || prevY != y) ? true : false;
	};

	// Draw player
	var draw = function(ctx) {
		ctx.fillStyle = color;
		ctx.fillRect(x-5, y-5, 10, 10);
	};

	// Define which variables and methods can be accessed
	return {
		getX: getX,
		getY: getY,
		getColor: getColor,
		setX: setX,
		setY: setY,
		setColor: setColor,
		update: update,
		updateMove: updateMove,
		draw: draw
	}
};