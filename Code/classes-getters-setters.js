const _radius = new WeakMap();

class Circle {
	constructor(radius) {
		_radius.set(this, radius);
	}

	get radius() {
		return _radius.get(this);
	}

	set radius(value) {
		if (value < 0) value = 0;
		_radius.set(this, value);
	}
}

const c = new Circle(4);
c.radius = -10;
console.log(c.radius);
