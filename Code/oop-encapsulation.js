//! Procedural Programming
let baseSalary = 30_000;
let overtime = 10;
let rate = 15;

function getWage(baseSalary, overtime, rate) {
	return baseSalary + overtime * rate;
}

//! Object Oriented Programming
let employee = {
	baseSalary: 30_000,
	overtime: 10,
	rate: 15,

	getWage: function () {
		return this.baseSalary + this.overtime * this.rate;
	},
};
console.log(employee.getWage());
