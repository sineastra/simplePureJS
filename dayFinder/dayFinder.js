// Accepts date, returns the weekday the date was on. Absolutely correct, tested on at least 20 dates from
// 1700 to 2021. NAILED. However applies for Gregorian calendar only. That's 1582 year and above.

const dayFinder = (day, month, year) => {
	const monthKeys = {
		1: 11,
		2: 12,
		3: 1,
		4: 2,
		5: 3,
		6: 4,
		7: 5,
		8: 6,
		9: 7,
		10: 8,
		11: 9,
		12: 10,
	}
	const days = {
		0: 'Sunday',
		1: 'Monday',
		2: 'Tuesday',
		3: 'Wednesday',
		4: 'Thursday',
		5: 'Friday',
		6: 'Saturday',
	}

	const splitYear = `${year}`.split('')
	const century = splitYear.slice(0, 2).join('')
	let yearDigits = splitYear.slice(2).join('')

	if (monthKeys[month] === 11 || monthKeys[month] === 12) {
		yearDigits -= 1
	}

	const result =
		(Number(day) + Math.floor(2.6 * monthKeys[Number(month)] - 0.2) -
			(2 * Number(century)) +
			Number(yearDigits) + Math.floor(Number(yearDigits) / 4) +
			Math.floor(Number(century) / 4)) % 7

	return `The weekday on date ${day}/${month}/${year} is ${result < 0
		? days[result + 7]
		: days[result]}`
}