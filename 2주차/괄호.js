let fs = require('fs');
let line = fs.readFileSync('예제.txt').toString().split('\r\n');
let length = line[0]; // 테스트 줄수
let answer = [];
let stack = [];
function sol(length) {
  for (let i = 1; i <= length; i++) {
    function solution(s) {
      let answer = 'YES';
      stack = [];
      for (let x of s) {
        if (x === '(') stack.push(x);
        else {
          if (stack.length === 0) return 'NO';
          stack.pop();
        }
      }
      if (stack.length > 0) return 'NO';
      return answer;
    }
    answer.push(solution(line[i]));
  }
}
sol(length);
console.log(answer.join('\n'));
