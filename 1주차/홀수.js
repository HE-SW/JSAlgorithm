let fs = require('fs');
let line = require('fs').readFileSync('예제.txt').toString().split('\n');
let n = [];
for (let i = 0; i < line.length; i++) {
  if (parseInt(line[i]) % 2 === 1) {
    n.push(parseInt(line[i]));
  }
}
if (Array.isArray(n) && n.length === 0) {
  console.log(-1);
} else {
  console.log(n.reduce((a, b) => a + b));
  console.log(Math.min(...n));
}

// let line = fs.readFileSync('/dev/stdin').toString().split('\n');
// n=[]; 빈배열 체크 Array.isArray(n) && n.length === 0
// reduce((a,b) => a+b)) 배열 다 더하기
// Math.min(...arr) = 배열에서의 최솟값
// Math.max(...arr) = 배열에서의 최댓값
