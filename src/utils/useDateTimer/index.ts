import { FSingleDigitConverter } from "../useSingleDigitConverter";

/**
 * Returns the required date with time (in 12-hour format).
 *
 * Output format:
 *
 * _`day`_/_`month`_/_`year`_ _`weekday`_ _`hour`_:_`minute`_ _`AM`|`PM`_
 */
export const FDateTimer = (date: Date) => {
	const day = FSingleDigitConverter(date.getDate());
	const month = FSingleDigitConverter(date.getMonth() + 1);
	const year = FSingleDigitConverter(date.getFullYear());
	const weekday = FSingleDigitConverter(date.getDay());

	const handleWeekday = () => {
		switch (weekday) {
			case "00":
				return "Sun";
			case "01":
				return "Mon";
			case "02":
				return "Tue";
			case "03":
				return "Wed";
			case "04":
				return "Thur";
			case "05":
				return "Fri";
			case "06":
				return "Sat";
			default:
				return "Null";
		}
	};

	let hour = date.getHours();
	let isPM = false;
	if (hour >= 12) {
		if (hour > 12) hour -= 12;
		isPM = true;
	}
	const minute = FSingleDigitConverter(date.getMinutes());
	const dateTime =
		day +
		"/" +
		month +
		"/" +
		year +
		" " +
		handleWeekday() +
		" " +
		FSingleDigitConverter(hour) +
		":" +
		minute +
		" " +
		(isPM ? "PM" : "AM");

	return dateTime;
};
