let fs = require('fs');
let line = fs.readFileSync('예제.txt').toString().trim();
let N = Number(line);
let nums = [];
for (let i = 1; i <= 1023; i++) {
  let num = 0;
  let binary = i;
  for (let idx = 9; idx >= 0; idx--) {
    if (binary % 2 == 1) {
      num = 10 * num + idx;
    }
    binary = Math.floor(binary / 2);
  }
  nums.push(num);
}

nums.sort((a, b) => a - b);

if (N > 1022) {
  console.log(-1);
} else {
  console.log(nums[N]);
}
