'use strict';

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = temp;
  }
  console.log({
    arr
  });
  return arr;
}

console.log(insertionSort([8, 4, 23, 42, 16, 15]));
console.log(insertionSort([20, 18, 12, 8, 5, -2]));// Reverse-sorted
console.log(insertionSort([5, 12, 7, 5, 5, 7]));// Few uniques
console.log(insertionSort([2, 3, 5, 7, 13, 11]));// Nearly-sorted

module.exports = insertionSort;
