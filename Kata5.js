// How do you find the largest and smallest number in an unsorted integer array?

const array = [];
const array2 = [5, 6, 9, 10, 100, 0];
const array3 = [9, 9, 7, 1];

const largestAndSmallestIntegers = array => {
  var largest = 0;
  var smallest = 0;

  if (array.length === 0) {
    return "There is no items in the array";
  }

  for (var i = 0; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
    if (array[i] < smallest) {
      smallest = array[i];
    }
  }
  return "largest: " + largest + " " + "Smallest: " + smallest;
};

console.log(largestAndSmallestIntegers(array3));
