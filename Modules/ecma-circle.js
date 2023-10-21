const _radius = new WeakMap();

export class Circle {
	constructor(radius) {
		_radius.set(this, radius);
	}

	draw() {
		console.log(`Draw a ${_radius.get(this)} radius circle`);
	}
}
