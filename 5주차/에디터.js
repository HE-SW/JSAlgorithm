let line = require('fs').readFileSync('예제.txt').toString().trim().split('\n');
let left = line.shift().split('');
let N = line.shift();
let right = [];
let na = '';
for (let i = 0; i < N; i++) {
  if (line[i].length === 3) {
    na = line[i][2];
  }
  switch (line[i][0]) {
    case 'L':
      if (left.length !== 0) right.push(left.pop());
      break;
    case 'D':
      if (right.length !== 0) left.push(right.pop());
      break;
    case 'B':
      if (left.length !== 0) left.pop();
      break;
    case 'P':
      left.push(na);
  }
}
let result = [...left, ...right.reverse()].join('');
console.log(result);
