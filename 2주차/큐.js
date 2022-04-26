const { log } = require('console');
let fs = require('fs');
let line = fs.readFileSync('예제.txt').toString().split('\r\n');
let length = line[0]; // 명령 수
line.shift();
let input = line; // input.length = length
let queue = [];
let answer = [];
function sol(input) {
  let a = input.map((e) => e.split(' ')); // push와 정수 분해하기 ex)'push 1' = >['push' '1']
  for (let i = 0; i < length; i++) {
    if (a[i][0] === 'push') {
      // 1. push X: 정수 X를 스택에 넣는 연산이다.
      queue.push(a[i][1]);
    } else if (a[i][0] === 'pop') {
      // 2. pop: 스택에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 스택에 들어있는 정수가 없는 경우에는 -1을 출력한다.
      queue.length === 0 ? answer.push(`-1`) : answer.push(`${queue.shift()}`);
    } else if (a[i][0] === 'size') {
      // 3. size: 스택에 들어있는 정수의 개수를 출력한다.
      answer.push(`${queue.length}`);
    } else if (a[i][0] === 'empty') {
      // 4. empty: 스택이 비어있으면 1, 아니면 0을 출력한다.
      queue.length > 0 ? answer.push(`0`) : answer.push(`1`);
    } else if (a[i][0] === 'front') {
      // 5. front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
      queue.length > 0 ? answer.push(`${queue[0]}`) : answer.push(`-1`);
    } else if (a[i][0] === 'back') {
      // 6. back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
      queue.length > 0
        ? answer.push(`${queue[queue.length - 1]}`)
        : answer.push(`-1`);
    }
  }
  console.log(answer.join('\n'));
}
sol(input);
// let line = fs.readFileSync('/dev/stdin').toString().split('\n');
