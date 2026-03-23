const factorial = function (n) {
	if (!Number.isInteger(n) | (n < 0)) return;
	if (n === 0) return 1;
	return n === 1 ? n : n * factorial(n - 1);
};

module.exports = factorial;
