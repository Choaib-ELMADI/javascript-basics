function HtmlElement() {
	this.click = function () {
		console.log("Clicked");
	};
}
HtmlElement.prototype.focus = function () {
	console.log("Focused");
};

function HtmlSelectElement(items = []) {
	this.items = items;
	this.addItem = function (i) {
		this.items.push(i);
		console.log("Item added");
	};
	this.removeItem = function (i) {
		this.items.splice(this.items.indexOf(i), 1);
		console.log("Item removed");
	};
	this.render = function () {
		return `<select>${this.items
			.map((i) => `<option>${i}</option>`)
			.join("")}</select>`;
	};
}
HtmlSelectElement.prototype = new HtmlElement();

const e = new HtmlElement();
// e.click();
// e.focus();

const se = new HtmlSelectElement();
se.focus();
se.click();
se.addItem(1);
console.log(se.items);
se.removeItem(1);
console.log(se.items);
se.addItem(1);
se.addItem(2);
se.addItem(3);
console.log(se.items);
console.log(se.render());
