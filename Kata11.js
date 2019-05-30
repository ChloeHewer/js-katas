// How do you check if a given string is a palindrome?

const string = "Madam";
const string2 = "hEy";

const isStringPalindrome = string => {
  const stringBackwards = string
    .split("")
    .reverse()
    .join("");
  return string.toLowerCase() === stringBackwards.toLowerCase();
};

console.log(isStringPalindrome(string));
console.log(isStringPalindrome(string2));
