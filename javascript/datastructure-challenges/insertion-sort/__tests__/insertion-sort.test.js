'use strict';
const insertionSort = require('../insertion_sort');

describe('Insertion Sort Tests', () => {

  test('Test1:Randomly-sorted:', () => {
    // let insertionSort = new sort();
    expect(insertionSort([23, 1, 10, 5, 2])).toStrictEqual([1, 2, 5, 10, 23]);
  });
  test('Test1:Reverse-sorted:', () => {
    // let insertionSort = new sort();
    expect(insertionSort([40, 30, 20, 10, 5, -10])).toStrictEqual([-10, 5, 10, 20, 30, 40]);
  });
  test('Test1:Few uniques:', () => {
    // let insertionSort = new sort();
    expect(insertionSort([7, 15, 8, 7, 5, 7])).toStrictEqual([5, 7, 7, 7, 8, 15]);
  });
  test('Test1:Nearly-sorted:', () => {
    // let insertionSort = new sort();
    expect(insertionSort([4, 6, 8, 10, 14, 11])).toStrictEqual([4, 6, 8, 10, 11, 14]);
  });
});
