"use strict";

function solveEquation(a, b, c) {
	if (a === 0) {
		if (b === 0) {
			return c === 0
		} else {
			return [-c / b];
		}
	}

	const discriminant = b * b - 4 * a * c;

	if (discriminant > 0) {
		const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		return [x1, x2];
	} else if (discriminant === 0) {
		const x = -b / (2 * a);
		return [x];
	} else {
		return [];
		return "Нет действительных корней";
	}
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const P = (percent / 100) / 12;
  const S = amount - contribution;
  const mouthPay = S * (P + (P / (((1 + P) ** countMonths) - 1)));
  const allPay = (mouthPay * countMonths).toFixed(2);
  return Number(allPay);
}
