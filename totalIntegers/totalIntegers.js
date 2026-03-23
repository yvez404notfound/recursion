const totalIntegers = function (list) {
	let integerCount = 0;

	if (typeof list !== "object") return;

	for (const i in list) {
		const item = list[i];
		const itemType = typeof item;

		if (itemType === "number" && Number.isInteger(item)) integerCount++;
		if (itemType === "object") integerCount = totalIntegers(item, integerCount);
	}

	return integerCount;
};

module.exports = totalIntegers;
