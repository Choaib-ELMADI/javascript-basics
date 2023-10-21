const canEat = {
	eat: function () {
		this.hunger--;
		console.log("Eating");
	},
};

const canWalk = {
	walk: function () {
		console.log("Walking");
	},
};

const person = Object.assign({}, canEat, canWalk);
console.log(person);
