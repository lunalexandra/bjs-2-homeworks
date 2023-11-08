function getArrayParams(...arr) {
	let min = Math.min(...arr);
	let max = Math.max(...arr);
	let sum = arr.reduce(function(sum1, elem) {
		return sum1 + elem;
	})
	let avg = +((sum / arr.length)).toFixed(2);
	return {
		max: max,
		min: min,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	if (arr.length < 1) {
		return 0;
	} else {
		let sum = arr.reduce(function(sum1, elem) {
			return sum1 + elem;
		})
		return sum;
	}
}

function differenceMaxMinWorker(...arr) {
	if (arr.length < 1) {
		return 0;
	} else {
		let min = Math.min(...arr);
		let max = Math.max(...arr);
		return max - min;
	}
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr.length < 1) {
      return 0;
    } else if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr.length < 1) {
			return 0;
		} else if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement += 1;
		}
	}
	return sumEvenElement / countEvenElement;
}

function makeWork([...arrOfArr], func) {
	let maxWorkerResult = arrOfArr[0][0];
	for (let i = 0; i < arrOfArr.length; i++) {
		let workerResult = func(...arrOfArr[i]);
		if (workerResult > maxWorkerResult) {
			maxWorkerResult = workerResult;
		}
	}
	return maxWorkerResult;
}


