//How do you find the missing numbers in a given integer array?

var array = [1, 2, 3, 4, 6, 7, 8, 9];
var array2 = [3, 5, 6, 7, 8];
var array3 = [5, 6, 8, 7, 10];

const findMissingNumber = array => {
  var sortedArray = array.sort((a, b) => a - b);
  var testArray = [];
  for (var i = sortedArray[0]; i < sortedArray[sortedArray.length - 1]; i++) {
    if (sortedArray.indexOf(i) === -1) {
      testArray.push(i);
    }
  }
  return testArray;
};

console.log(findMissingNumber(array));
console.log(findMissingNumber(array2));
console.log(findMissingNumber(array3));
