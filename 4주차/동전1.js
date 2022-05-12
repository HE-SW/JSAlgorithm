let fs = require('fs');
let line = fs.readFileSync('예제.txt').toString().trim().split('\n');
let K = line
  .shift()
  .split(' ')
  .map((a) => Number(a));
let target = K[1];
let coin = line.map((a) => Number(a)).sort((a, b) => a - b);
let arr = Array(target + 1).fill(0);
arr[0] = 1;
function sol() {
  for (let i = 0; i < K[0]; i++) {
    for (let j = coin[i]; j <= target; j++) {
      arr[j] += arr[j - coin[i]];
    }
  }
  return arr[target];
}
console.log(sol());
