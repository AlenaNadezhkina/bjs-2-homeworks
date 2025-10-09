function getArrayParams(...arr) {
  if (arr.length === 0) return 0;
	min = Infinity;
	max = -Infinity;
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
		sum += arr[i];
	}
	const avg = +(sum / arr.length).toFixed(2);
	return {
		max: max,
		min: min,
		avg: avg
	}
}

function summElementsWorker(...arr) {
  if (arr.length === 0) return 0;
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	const avg = +(sum / arr.length).toFixed(2);
	return sum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;
	min = Infinity;
	max = -Infinity;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
		if (arr[i] < min) {
			min = arr[i];
		}
	}
	const difference = +(max - min);
	return difference;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) return 0;
	sumEvenElement = 0;
	sumOddElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	const difference = +(sumEvenElement - sumOddElement);
	return difference;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) return 0;
	sumEvenElement = 0;
	countEvenElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement += 1;
		}
	}
	const avgEven = +(sumEvenElement / countEvenElement);
	return avgEven;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	for (let i = 0; i < arrOfArr.length; i++) {
		const result = func(...arrOfArr[i]);
		console.log('result:', result);
		if (result > maxWorkerResult) {
			maxWorkerResult = result;
		}
	}
	return maxWorkerResult;
}