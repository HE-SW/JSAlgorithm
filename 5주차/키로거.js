let line = require('fs').readFileSync('예제.txt').toString().trim().split('\n');
let N = line[0];
let answer = [];
for (let j = 1; j <= N; j++) {
  let password = line[j].split('');
  let left = [];
  let right = [];
  for (let i = 0; i < password.length; i++) {
    if (password[i] === '<') {
      if (left.length !== 0) right.push(left.pop());
    } else if (password[i] === '>') {
      if (right.length !== 0) left.push(right.pop());
    } else if (password[i] === '-') {
      if (left.length !== 0) left.pop();
    } else {
      left.push(password[i]);
    }
  }
  let result = [...left, ...right.reverse()].join('');
  answer.push(result);
}
console.log(answer.join('\n'));
