// How do you print the first non-repeated character from a string?

const string = "abbg";
const string2 = "hhhhhhhguksdnsmdys";

var firstNonRepeatedCharacter = function(string) {
  var chars = string.split("");
  for (var i = 0; i < string.length; i++) {
    if (
      chars.filter(function(j) {
        return j == string.charAt(i);
      }).length == 1
    ) {
      return string.charAt(i);
    }
  }
};

console.log(firstNonRepeatedCharacter(string));
console.log(firstNonRepeatedCharacter(string2));
