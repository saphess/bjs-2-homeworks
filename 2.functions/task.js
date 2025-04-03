function getArrayParams(...arr) {
  let sum = 0;
  let min = Infinity;
  let max = -Infinity;
  for (let n of arr) {
    sum += n;
    if (n < min) { min = n; }
    if (n > max) { max = n; }
  }
  let avg = +(sum / arr.length).toFixed(2);
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length == 0) { return 0; }
  return arr.reduce(function (a, b) { return a + b });
}

function differenceMaxMinWorker(...arr) {
  if (arr.length == 0) { return 0; }
  return Math.max.apply(null, arr) - Math.min.apply(null, arr);

}

function differenceEvenOddWorker(...arr) {
  if (arr.length == 0) { return 0; }
  let sumEven = 0;
  let sumОdd = 0;
  for (let n of arr) {
    if (n % 2 == 0) { sumEven += n; }
    else { sumОdd += n; }
  }
  return sumEven - sumОdd;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length == 0) { return 0; }
  let sumEven = 0;
  let cntEven = 0;
  for (let n of arr) {
    if (n % 2 == 0) {
      sumEven += n;
      cntEven += 1;
    }
  }
  return +(sumEven / cntEven).toFixed(2);
}

function makeWork(arrOfArr, func) {
  if (arrOfArr.length == 0) { return 0; }
  let maxWorkerResult = -Infinity;
  for (let arr of arrOfArr) {
    let work = func(...arr);
    if (work > maxWorkerResult) { maxWorkerResult = work; }
  }
  return maxWorkerResult;
}
