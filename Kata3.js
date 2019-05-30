// How do you find duplicate numbers in an array if it contains multiple duplicates?

var array = [1, 4, 5, 4, 7, 4];
var array2 = [1, 3, 6, 6, 8];
var array3 = [1, 1, 1, 5, 6, 7, 5, 7, 5];

multipleDuplicates = array => {
  sortedArray = array.sort((a, b) => a - b);
  duplicateNumbers = [];
  for (var i = 1; i < array.length; i++) {
    if (sortedArray[i] === sortedArray[i - 1]) {
      duplicateNumbers.push(sortedArray[i]);
    }
  }
  return duplicateNumbers;
};

console.log(multipleDuplicates(array));
console.log(multipleDuplicates(array2));
console.log(multipleDuplicates(array3));
