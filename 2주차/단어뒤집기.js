let fs = require('fs');
let line = fs.readFileSync('예제.txt').toString().split('\r\n');
let length = line[0]; // 테스트 줄수
let answer = [];
function sol(length) {
  for (let i = 1; i <= length; i++) {
    answer.push(
      line[i]
        .split(' ')
        .map((e) => e.split('').reverse('').join(''))
        .join(' ')
    );
  }
}
sol(length);
console.log(answer.join('\n'));
// let line = fs.readFileSync('/dev/stdin').toString().split('\n');
