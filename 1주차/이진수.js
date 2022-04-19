const input = require('fs')
  .readFileSync('예제.txt')
  .toString()
  .trim()
  .split('\n');
input.shift();
let answer = '';

for (let i = 0; i < input.length; i++) {
  const binary = Number(input[i]).toString(2).split('').reverse().map(Number);
  let index = 0;
  let result = '';
  while (binary.indexOf(1, index) !== -1) {
    result += binary.indexOf(1, index) + ' ';
    index = binary.indexOf(1, index) + 1;
  }
  answer += `${result}\n`;
}

console.log(answer);
let b = 255;
console.log(b.toString(2));
console.log(b.toString(8));
console.log(b.toString(16));
