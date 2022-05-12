let fs = require('fs');
let line = fs.readFileSync('예제.txt').toString();
let n = Number(line);

function solution(n) {
  for (let k = 1; k <= Math.sqrt(2 * n) + 1; k++) {
    if (2 * n < k * k + k) {
      return console.log(k - 1);
    } else if (2 * n === k * k + k) {
      return console.log(k);
    }
  }
}
solution(n);
