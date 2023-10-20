function Circle(radius) {
	// INSTANCE MEMBERS
	this.radius = radius;
}

// PROTOTYPE MEMBERS
Circle.prototype.draw = function () {
	console.log("Draw");
};

const c1 = new Circle(1);
const c2 = new Circle(2);

console.log(c1);
c1.draw();
