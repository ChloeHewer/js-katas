// How can a given string be reversed using recursion?

const string = "HELLO";
const string2 = "Why, Hello there";

var recursionReverse = function(string) {
  return string === ""
    ? ""
    : recursionReverse(string.substr(1)) + string.charAt(0);
};

console.log(recursionReverse(string));
console.log(recursionReverse(string2));
