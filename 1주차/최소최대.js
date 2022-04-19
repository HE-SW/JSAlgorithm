let fs = require('fs');
let line = require('fs').readFileSync('예제.txt').toString().split('\n');
let n = line[1].split(' ').map((e) => parseInt(e));
let max = Math.max(...n);
let min = Math.min(...n);
console.log(`${min} ${max}`);
// let line = fs.readFileSync('/dev/stdin').toString().split('\n');
