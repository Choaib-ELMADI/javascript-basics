const prices = [100, 120, 105, 2014, 230];

const sum = prices.reduce((accumulator, currentValue) => {
	return accumulator + currentValue;
}, 0);

console.log(sum);
