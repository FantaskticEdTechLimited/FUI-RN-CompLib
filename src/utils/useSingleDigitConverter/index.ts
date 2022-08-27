/**
 * Returns a double digits from a single digit (value from 0 to 9).
 *
 * For example, `1` will be converted to `01`.
 */
export const FSingleDigitConverter = (value: number) => {
	if (value >= 0 && value < 10) return "0" + value;
	else return value;
};
