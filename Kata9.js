// How do you check if two strings are anagrams of each other?

string1 = "HELLO";
string2 = "EHLLO";

string3 = "nah";
string4 = "hanf";

const areStringsAnagrams = (string1, string2) =>
  sortString(string1) === sortString(string2);

const sortString = string => {
  return string
    .split("")
    .sort()
    .join("");
};

console.log(areStringsAnagrams(string1, string2));
console.log(areStringsAnagrams(string3, string4));
