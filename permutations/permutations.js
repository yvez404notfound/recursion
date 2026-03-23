const permutations = function (list, l = 0, r = 0) {
	if (list.length <= 1) return [list];

	let permutationsList = [];
	const origList = [...list];

	while (r <= list.length - 1) {
		if (Math.min(l, r) >= list.length - 1)
			return !permutationsList.includes(list) && [list];

		swapListvalues(l, r, list);
		permutationsList.push(...permutations(list, l + 1, l + 1));

		list = [...origList];
		r++;
	}

	return permutationsList.sort();
};

const swapListvalues = function (index1, index2, list) {
	return ([list[index1], list[index2]] = [list[index2], list[index1]]);
};

module.exports = permutations;
