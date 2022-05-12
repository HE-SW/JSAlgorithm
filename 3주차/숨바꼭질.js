let input = require('fs').readFileSync('예제.txt').toString().split('\n');
let n = Number(input[0].split(' ')[0]);
let k = Number(input[0].split(' ')[1]);
let point = Array.from({ length: 100001 }).fill(0);
let answer = 0;
function BFS() {
  let queue = [];
  queue.push(n);
  point[n] = 1;
  let time = 0;
  while (queue.length) {
    let len = queue.length;
    console.log(queue);
    for (let i = 0; i < len; i++) {
      let x = queue.shift();
      if (x === k) return time;
      for (let Next of [x - 1, x + 1, x * 2]) {
        if (Next >= 0 && Next <= 100000 && point[Next] === 0) {
          point[Next] = 1;
          queue.push(Next);
        }
      }
    }
    time++;
  }
}
answer = BFS();
console.log(answer);
