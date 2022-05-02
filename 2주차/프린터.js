let fs = require('fs');
let line = fs.readFileSync('예제.txt').toString().split('\r\n');
let priorities = line[0].split('').map((e) => parseInt(e));
let location = parseInt(line[1]);
console.log(priorities);
function solution(priorities, location) {
  let list = priorities.map((t, i) => ({
    my: i === location,
    val: t,
  }));
  let count = 0;
  while (true) {
    let cur = list.shift();
    if (list.some((t) => t.val > cur.val)) {
      list.push(cur);
    } else {
      count++;
      if (cur.my) return count;
    }
  }
}
console.log(solution(priorities, location));

function solution(priorities, location) {
  let answer = 0;
  // priorities에서 목표 문서를 표시하는 배열 생성
  const check = [];
  // 목표 문서의 위치 요소는 true, 나머지는 false로 초기화
  for (let i = 0; i < priorities.length; i++) {
    if (i === location) {
      check[i] = true;
    } else {
      check[i] = false;
    }
  }
  // priorites가 전부 비워질 때까지 실행
  while (priorities.length > 0) {
    // priorites와 check 첫 요소를 가져오기
    const firstPriority = priorities.shift();
    const firstCheck = check.shift();
    // 해당 요소보다 큰 요소가 있는지 없는지를 판별할 변수
    let flag = true;
    for (let j = 0; j < priorities.length; j++) {
      if (firstPriority < priorities[j]) {
        // 뒤로 넘기기
        priorities.push(firstPriority);
        check.push(firstCheck);
        // 큰 요소가 있으므로 false
        flag = false;
        break;
      }
    }
    // flag가 true이면 가장 중요한 문서이므로 출력처리
    if (flag) {
      answer += 1;
      // 목표로한 문서인 경우 중단
      if (firstCheck) {
        break;
      }
    }
  }
  return answer;
}

// some 활용
// map으로 객체화 , 가능
