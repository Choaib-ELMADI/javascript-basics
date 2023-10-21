// * Each time we call the Symbol function, we get a new value
// * We use symbols for creating private properties
const _radius1 = Symbol();
const _draw1 = Symbol();

class Circle1 {
	constructor(radius) {
		this[_radius1] = radius;
	}

	[_draw1]() {
		console.log("Draw");
	}
}
const c = new Circle1(1);

// * A Weakmap is issentially a dictionnary where keys are objects and values can be anything
// * We use weakmaps to create private properties
const _radius2 = new WeakMap();
const _draw2 = new WeakMap();

class Circle2 {
	constructor(radius) {
		_radius2.set(this, radius);
	}

	draw() {
		console.log(_radius2.get(this));
	}
}
