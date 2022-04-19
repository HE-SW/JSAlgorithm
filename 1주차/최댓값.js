let fs = require('fs');
let line = fs.readFileSync('/dev/stdin').toString().split('\n');
let n = [];
for (let i = 0; i < line.length; i++) {
  if (line[i] !== '') {
    n.push(parseInt(line[i]));
  }
}
let max = n.reduce((a, b) => (a > b ? a : b));
let index = n.indexOf(max);
console.log(max);
console.log(index + 1);
