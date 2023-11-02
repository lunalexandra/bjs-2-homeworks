"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = (Math.pow(b, 2) - 4 * a * c);
	if (d < 0) {
		arr = [];
	} else if (d === 0) {
		arr = [(-b) / (2 * a)];
	} else if (d > 0) {
		arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
	};
	return arr;
}

solveEquation(a, b, c);

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let monthlyRate = percent / 100 / 12;
	let creditBody = amount - contribution;
	let monthlyFee;
	monthlyFee = creditBody * (monthlyRate + (monthlyRate / (((1 + monthlyRate) ** countMonths) - 1)));
	let sum = (monthlyFee * countMonths).toFixed(2);
	return +sum;
}