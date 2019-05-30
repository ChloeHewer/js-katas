// How do you find the duplicate number on a given integer array?

const array = [1, 1, 2, 6, 0];
const array2 = [4, 6, 8, 4, 0];
const array3 = [6, 8, 7, 8, 4];
const array4 = [7, 9, 3, 9, 7, 2];

const findDuplicateNumbers = array => {
  sortedArray = array.sort((a, b) => a - b);
  duplicateNumbers = [];
  for (var i = 1; i < array.length; i++) {
    if (sortedArray[i] === sortedArray[i - 1]) {
      duplicateNumbers.push(sortedArray[i]);
    }
  }
  return duplicateNumbers;
};

console.log(findDuplicateNumbers(array));
console.log(findDuplicateNumbers(array2));
console.log(findDuplicateNumbers(array3));
console.log(findDuplicateNumbers(array4));
