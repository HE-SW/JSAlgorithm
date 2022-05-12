let fs = require('fs');
let line = fs.readFileSync('예제.txt').toString().trim().split('\n');
let K = line
  .shift()
  .split(' ')
  .map((a) => Number(a));
let target = K[1];
let coin = line.map((a) => Number(a));
let dp = Array(target + 1).fill(100001);
dp[0] = 0;
for (let i = 0; i < K[0]; i++) {
  for (let j = coin[i]; j <= target; j++) {
    dp[j] = Math.min(dp[j], dp[j - coin[i]] + 1);
  }
}
console.log(dp[target] === 100001 ? -1 : dp[target]);
