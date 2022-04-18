let fs = require('fs');
let line = require('fs').readFileSync('예제.txt').toString().split('\n');
let n = parseInt(line);
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(n));

// let line = fs.readFileSync('/dev/stdin').toString().split('\n');
