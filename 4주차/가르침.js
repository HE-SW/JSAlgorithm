const { log } = require('console');
let fs = require('fs');
let line = fs.readFileSync('예제.txt').toString().trim().split('\n');
let fline = line.shift().split(' ').map(Number);
let N = fline[0];
let K = fline[1];
let words = line.map((a) => a.replace(/[anitc]/gi, ''));
let study = Array(26).fill(0);
for (x in ['a', 'n', 'i', 'c', 't']) {
  study[x.charCodeAt(0) - 97] = 1;
}
let count = 0;
words.forEach((a) => (a.length === 0 ? count++ : null));

function dfs(index, count) {
  let answer;
  if (count == k - 5) {
    words_count = 0;
  }
}
if (K < 5) {
  console.log(0);
} else if (K == 26) {
  console.log(N);
} else {
  console.log(count);
}
