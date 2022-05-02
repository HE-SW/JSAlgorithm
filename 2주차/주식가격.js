let fs = require('fs');
let line = fs.readFileSync('예제.txt').toString().split('');
let prices = line.map((e) => parseInt(e)); // [ 1, 2, 3, 2, 3 ]
let len = prices.length - 1;
console.log(prices);

// 1. return값 초기배열을 만들고
// 2. return 마지막 값은 0 으로 고정
// 3. 기본값은 1
// 4. i초 가격 <= i+1초 가격일때 i+1 이후 가격 확인하면서 초증가
function sol(prices) {
  let answer = new Array(prices.length).fill(0); // [0,0,0,0,0] prices.length만큼 생성
  for (let i = 0; i < len; i++) {
    answer[i] = 1;
    if (prices[i] < prices[i + 1]) {
      for (let j = i + 1; j < len; j++) {
        if (prices[i] > prices[j]) break;
   function sol(prices) {
  let answer = new Array(prices.length).fill(0); // [0,0,0,0,0] prices.length만큼 생성
  for (let i = 0; i < len; i++) {
    answer[i] = 1;
    if (prices[i] < prices[i + 1]) {
      for (let j = i + 1; j < len; j++) {
        if (prices[i] > prices[j]) break;
        else answer[i] += 1;
      }
    }
  }
  return answer;
}
console.log(sol(prices));  
// console.log(`prices :${prices}`);
// console.log(`return :${sol(prices)}`);
