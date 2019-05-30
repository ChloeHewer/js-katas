// How do you reverse the words in a sentence?

const sentence = "Hello I am Chloe";
const sentence2 = "AHHHHHHHHH HELLO";
const sentence3 = "How are you?";

const reverseWords = sentence => {
  var result = "";
  var wordArray = sentence.split(" ");
  for (var i = wordArray.length - 1; i >= 0; i--) {
    result += wordArray[i] + " ";
  }
  return result;
};

console.log(reverseWords(sentence));
console.log(reverseWords(sentence2));
console.log(reverseWords(sentence3));
