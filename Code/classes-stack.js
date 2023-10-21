const _items = Symbol();

class Stack {
	constructor() {
		this[_items] = [];
		this.count = 0;
	}

	push(value) {
		this[_items].push(value);
		this.count++;
	}

	pop() {
		if (this[_items].length === 0) {
			throw new Error("Stack is empty");
		}
		this.count--;
		return this[_items].pop();
	}

	peek() {
		if (this[_items].length === 0) {
			throw new Error("Stack is empty");
		}
		// return this[_items].slice(-1, this[_items].length)[0];
		return this[_items][this[_items].length - 1];
	}

	get items() {
		return this[_items];
	}
}

const stack = new Stack();
stack.push("a");
stack.push("f");
console.log(stack.items);
console.log(stack.count);
console.log(stack.peek());
stack.pop();
stack.pop();
console.log(stack.items);
console.log(stack.count);
stack.peek();
