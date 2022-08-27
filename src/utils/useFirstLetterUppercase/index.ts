/**
 * Returns only the first letter to uppercase.
 */
export const FFirstLetterUppercase = (inputString: string) => {
	return (
		inputString.charAt(0).toUpperCase() + inputString.slice(1).toLowerCase()
	);
};
