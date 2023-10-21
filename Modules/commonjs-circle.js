const _radius = new WeakMap();

class Circle {
	constructor(radius) {
		_radius.set(this, radius);
	}

	draw() {
		console.log(`Draw a ${_radius.get(this)} radius circle`);
	}
}

module.exports = Circle;
