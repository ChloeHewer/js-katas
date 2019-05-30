// How do you check if a string contains only digits?

const string = "h4678";
const string2 = "12345";
const string3 = "w67,83th";

const isStringOnlyNumbers = string => {
  let array = string.split("").map(element => +element);
  let stringContainsOnlyDigits = true;

  console.log(array);
  for (var i = 0; i < array.length; i++) {
    if (isNaN(array[i]) === true) {
      stringContainsOnlyDigits = false;
    }
  }
  return stringContainsOnlyDigits;
};

console.log(isStringOnlyNumbers(string));
console.log(isStringOnlyNumbers(string2));
console.log(isStringOnlyNumbers(string3));
