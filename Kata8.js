// How do you print duplicate characters from a string?

const string = "Hello hey Hi";

const findDuplicateCharacters = string => {
  const result = [];
  const stringArray = string
    .toLowerCase()
    .split("")
    .sort();

  for (var i = 1; i < stringArray.length; i++) {
    if (stringArray[i] === stringArray[i - 1]) {
      result.push(stringArray[i]);
    }
  }
  return result;
};

console.log(findDuplicateCharacters(string));
