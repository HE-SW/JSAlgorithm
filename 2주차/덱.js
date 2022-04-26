const { log } = require('console');
let fs = require('fs');
let line = fs.readFileSync('예제.txt').toString().split('\r\n');
let length = line[0]; // 명령 수
line.shift();
let input = line; // input.length = length
let deque = [];
let answer = [];
function sol(input) {
  let a = input.map((e) => e.split(' ')); // push와 정수 분해하기 ex)'push 1' = >['push' '1']
  for (let i = 0; i < length; i++) {
    if (a[i][0] === 'push_front') {
      // 1. push X: push_front X: 정수 X를 덱의 앞에 넣는다.
      deque.unshift(a[i][1]);
    } else if (a[i][0] === 'push_back') {
      // 2. push_back X: 정수 X를 덱의 뒤에 넣는다.
      deque.push(a[i][1]);
    } else if (a[i][0] === 'pop_front') {
      // 3. pop_front: 덱의 가장 앞에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
      deque.length === 0 ? answer.push(`-1`) : answer.push(`${deque.shift()}`);
    } else if (a[i][0] === 'pop_back') {
      // 4. pop_back: 덱의 가장 뒤에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
      deque.length === 0 ? answer.push(`-1`) : answer.push(`${deque.pop()}`);
    } else if (a[i][0] === 'size') {
      // 5. size: 덱에 들어있는 정수의 개수를 출력한다.
      answer.push(`${deque.length}`);
    } else if (a[i][0] === 'empty') {
      // 6. empty: 덱이 비어있으면 1을, 아니면 0을 출력한다.
      deque.length > 0 ? answer.push(`0`) : answer.push(`1`);
    } else if (a[i][0] === 'front') {
      // 7. front: 덱의 가장 앞에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
      deque.length > 0 ? answer.push(`${deque[0]}`) : answer.push(`-1`);
    } else if (a[i][0] === 'back') {
      // 8. back: 덱의 가장 뒤에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
      deque.length > 0
        ? answer.push(`${deque[deque.length - 1]}`)
        : answer.push(`-1`);
    }
  }
  console.log(answer.join('\n'));
}
sol(input);
// let line = fs.readFileSync('/dev/stdin').toString().split('\n');
