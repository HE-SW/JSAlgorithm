const { log } = require('console');
let fs = require('fs');
let line = fs.readFileSync('예제.txt').toString().split(' ');
let people = line[0]; // 사람 수
let number = line[1]; // 제거되는 순서
let table = [];
let pick = 0;
let answer = [];
function sol() {
  for (let i = 1; i <= people; i++) {
    table.push(i); // 테이블 사람 앉히기
  }
  if (number !== 1) {
    for (let j = 1; j <= people; j++) {
      pick = pick + (number - 1);
      if (table.length - 1 >= pick) {
        answer.push(table.splice(pick, 1).join(''));
      } else {
        pick = pick % table.length;
        answer.push(table.splice(pick, 1).join(''));
      }
    }
  } else {
    console.log(`\<${table.join(', ')}\>`);
  }
}
sol();
console.log(`\<${answer.join(', ')}\>`);
// let line = fs.readFileSync('/dev/stdin').toString().split('\n');
