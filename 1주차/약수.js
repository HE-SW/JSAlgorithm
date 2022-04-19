let fs = require('fs');
let line = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = line[1]
  .split(' ')
  .map((e) => Number(e))
  .sort((a, b) => a - b);
Array.isArray(n) ? console.log(n[0] * n[n.length - 1]) : console.log(n * n);
