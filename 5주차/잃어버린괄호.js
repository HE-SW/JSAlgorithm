let line = require('fs').readFileSync('예제.txt').toString().trim().split('-');
let min = [];
function sol(line) {
  for (i of line) {
    let sums = 0;
    let sum = i.split('+');
    for (j of sum) {
      sums += Number(j);
    }
    min.push(sums);
  }
  answer = min.reduce((a, b) => {
    return a - b;
  });
  return answer;
}
console.log(sol(line));
