const contains = function (obj, val) {
	if (obj !== null && Object.values(obj).includes(val)) return true;

	for (let data in obj) {
		if (typeof obj[data] !== "object") continue;
		if (contains(obj[data], val)) return true;
	}

	return false;
};

module.exports = contains;
