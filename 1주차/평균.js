let line = require('fs').readFileSync('예제.txt').toString().split('\n');
let length = parseInt(line[0]);
let n = line[1].split(' ').map((e) => parseInt(e));
let max = Math.max(...n);
let answer = (n.reduce((a, b) => a + b) * 100) / max / length;
console.log(answer);
// let line = require('fs').readFileSync('/dev/stdin').toString().split('\n');
