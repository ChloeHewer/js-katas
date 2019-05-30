// How do you find all pairs of an integer array whose sum is equal to a given number?
const array = [10, 20, 50, 60, 30, 40];
const array2 = [40, 60, 70, 30, 30, 80, 20];

const findPairs = (array, number) => {
  let pairs = [];
  for (var firstNumber = 0; firstNumber < array.length; firstNumber++) {
    for (var secondNumber = 0; secondNumber < array.length; ++secondNumber) {
      if (firstNumber === secondNumber) {
        break;
      } else if (array[firstNumber] + array[secondNumber] == number) {
        pairs.push(array[firstNumber], array[secondNumber]);
      }
    }
  }
  return pairs;
};

console.log(findPairs(array, 50));
console.log(findPairs(array2, 100));
