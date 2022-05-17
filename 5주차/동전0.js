let line = require('fs').readFileSync('예제.txt').toString().trim().split('\n');
let K = line
  .shift()
  .split(' ')
  .map((a) => Number(a));
let target = K[1];
let N = K[0];
let coins = line.map((a) => Number(a)).sort((a, b) => b - a);
let count = 0;
console.log(coins);
function sol() {
  for (let i = 0; i < N; i++) {
    while (coins[i] <= target) {
      target = target - coins[i];
      count++;
    }
  }
  return count;
}
console.log(sol());
