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
Circle.prototype.duplicate = function () {
	console.log("Duplicate Circle");
};

function Square() {}
extend(Square, Shape);
Square.prototype.duplicate = function () {
	console.log("Duplicate Square");
};

const s = new Shape();
const c = new Circle();
const sq = new Square();

const shapes = [s, c, sq];
for (let shape of shapes) shape.duplicate();
