class Shape {
	constructor(color) {
		this.color = color;
	}

	move() {
		console.log("Move");
	}
}

class Circle extends Shape {
	constructor(color) {
		super(color); // For initializing the parent constructor
	}

	draw() {
		console.log("Draw");
	}
}

const c = new Circle("red");
c.draw();
c.move();
console.log(c.color);
