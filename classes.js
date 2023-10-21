//! OLD WAY
function Circle(radius) {
	this.radius = radius;

	this.draw = function () {
		console.log("Draw");
	};
}

//! NEW WAY
class Circle {
	constructor(radius) {
		// Properties in the instance
		this.radius = radius;
		this.move = function () {
			console.log("Move");
		};
	}

	// Properties in the prototype
	draw() {
		console.log("Draw");
	}

	//! Use static to declare utility functions, not special to a specific object
	static parse(str) {
		return JSON.parse(str);
	}
}
