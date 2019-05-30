// How do you check if two strings are a rotation of each other?

const string = "hey";
const string2 = "yeh";

const string3 = "nope";
const string4 = "nopee";

const areStringsRotation = (string1, string2) => {
  const stringBackwards = string1
    .split("")
    .reverse()
    .join("");
  return stringBackwards === string2;
};

console.log(areStringsRotation(string, string2));
console.log(areStringsRotation(string3, string4));
