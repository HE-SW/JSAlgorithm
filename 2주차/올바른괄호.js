let fs = require('fs');
let line = fs.readFileSync('예제.txt').toString().split('');
let answer = 'YES';
let stack = [];
function sol(line) {
  line.forEach((e) => {
    if (e === '(') stack.push(e);
    else {
      if (stack.length === 0) {
        return 'NO';
      } else {
        stack.pop();
      }
    }
  });
  if (stack.length > 0) return 'NO';
  return answer;
}
console.log(stack);
console.log(sol(line));
// let line = fs.readFileSync('/dev/stdin').toString().split('\n');
