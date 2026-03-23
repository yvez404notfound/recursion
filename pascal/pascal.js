const pascal = function (row, rowNumbers = [1]) {
	if (row >= 2) {
		let tempRowNumbers = [];
		rowNumbers.unshift(0);
		rowNumbers.push(0);

		for (let i = 0; i < rowNumbers.length - 1; i++) {
			const sum = rowNumbers[i] + rowNumbers[i + 1];
			tempRowNumbers.push(sum);
		}

		return pascal(row - 1, tempRowNumbers);
	}

	return rowNumbers;
};

module.exports = pascal;
