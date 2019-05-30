// How do you swap two numbers without using a third variable?

const numb = 1;
const numb2 = 5;

const swapNumbers = (a, b) => {
  a = b + ((b = a), 0);
  return a + " amd " + b;
};

console.log(swapNumbers(numb, numb2));
