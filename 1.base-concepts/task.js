"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  if (a === 0) {
    if (b === 0) {
      arr.push(c === 0);
    } else {
      arr.push(-c / b)
    }
  }
  const D = b * b - 4 * a * c;
  if (D < 0) {
    return false;
  } else if (D === 0) {
    const x = -b / (2 * a);
    arr.push(x);
  } else if (D > 0) {
    const x1 = (-b + Math.sqrt(D)) / (2 * a);
    const x2 = (-b - Math.sqrt(D)) / (2 * a);
    arr.push(x1, x2)
  }
  return arr
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  const P = (percent / 100) / 12;
  const S = amount - contribution;
  const mouthPay = S * (P + (P / (((1 + P) ** countMonths) - 1)));
  const allPay = (mouthPay * countMonths).toFixed(2);
  return Number(allPay);
}
