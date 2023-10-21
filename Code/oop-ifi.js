/* IFI = Intermediate Function Inheritance */

function extend(Child, Parent) {
	Child.prototype = Object.create(Parent.prototype);
	Child.prototype.constructor = Child;
}

function Shape() {}
Shape.prototype.duplicate = function () {
	console.log("Duplicate");
};

function Circle() {}
extend(Circle, Shape);

// Methods Overriding
Circle.prototype.duplicate = function () {
	console.log("Duplicate Circle");
};

const c = new Circle();
c.duplicate();
