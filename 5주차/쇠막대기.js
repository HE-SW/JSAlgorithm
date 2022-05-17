let line = require('fs').readFileSync('예제.txt').toString().trim().split('()');
function sol(line) {
  let cuttingCount = 0;
  let total = 0;
  for (let i = 0; i < line.length; i++) {
    let k = line[i].split('');
    for (let j = 0; j < k.length; j++) {
      if (k[j] === '(') {
        cuttingCount++;
      } else if (k[j] === ')') {
        cuttingCount--;
        total++;
      }
    }
    total += cuttingCount;
  }
  return total;
}
console.log(sol(line));
