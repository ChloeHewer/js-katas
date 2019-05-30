// How do you remove duplicates from an array in place?

array = [2, 2, 4, 2, 9];
array2 = [5, 8, 6, 5, 7, 5, 8, 9, 7];
array3 = [5, 6, 7, 8, 5, 6, 7, 8, 5, 10, 5, 11];

const removeDuplicates = array => {
  sortedArray = array.sort((a, b) => a - b);
  var evenMoreSorted = [];
  for (var i = 0; i < array.length; i++) {
    if (sortedArray[i] === sortedArray[i + 1]) {
      sortedArray[i] = -1;
    }
    evenMoreSorted = sortedArray.sort((a, b) => a - b);
  }
  var i = 0;
  while (i < evenMoreSorted.length) {
    if (evenMoreSorted[0] === -1) {
      evenMoreSorted.shift();
    }
    i++;
  }
  return evenMoreSorted;
};

console.log(removeDuplicates(array));
console.log(removeDuplicates(array2));
console.log(removeDuplicates(array3));
