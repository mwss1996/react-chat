export function compareStringArrays(
	arrayA: Array<string>,
	arrayB: Array<string>
) {
	if (!arrayA || !arrayB) {
		return false;
	}
	if (arrayA.length != arrayB.length) {
		return false;
	}
	const sortedArrayA = [...arrayA].sort();
	const sortedArrayB = [...arrayB].sort();
	for (let x = 0; x < sortedArrayA.length; x++) {
		if (sortedArrayA[x] !== sortedArrayB[x]) {
			return false;
		}
	}
	return true;
}
