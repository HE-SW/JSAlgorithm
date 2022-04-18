let fs = require('fs');
let line = require('fs').readFileSync('예제.txt').toString().split('\n');
let n = [];
for (let i = 0; i < line.length; i++) {
  if (line[i] !== '') {
    n.push(parseInt(line[i]));
    // 문자 취급되어 틀림. parseInt 주의 ㅠㅠ
  }
}
let max = n.reduce((a, b) => (a > b ? a : b));
let index = n.indexOf(max);

console.log(n);
console.log(max);
console.log(index + 1);

// let line = fs.readFileSync('/dev/stdin').toString().split('\n');
