let fs = require('fs');
let line = fs.readFileSync('예제.txt').toString().split('\n');
let N = line.shift();
let 사탕 = line.map((a) => a.split(''));
let 최댓값 = 1;
for (let i = 0; i < N; i++) {
  if (최댓값 == N) break;
  for (let j = 0; j < N; j++) {
    if (최댓값 == N) break;
    사탕바꾸기(i, j);
  }
}
console.log(최댓값);
function 사탕바꾸기(i, j) {
  const dir = [
    [0, 1],
    [1, 0],
  ];
  dir.forEach((v) => {
    const [x, y] = v;

    if (
      i + x > -1 &&
      j + y > -1 &&
      i + x < N &&
      j + y < N &&
      사탕[i + x][j + y] != 사탕[i][j]
    ) {
      let 임시 = 사탕[i][j];
      사탕[i][j] = 사탕[i + x][j + y];
      사탕[i + x][j + y] = 임시;
      행확인();
      열확인();
      사탕[i + x][j + y] = 사탕[i][j];
      사탕[i][j] = 임시;
    }
  });
}
function 행확인() {
  for (let i = 0; i < N; i++) {
    let 겹치는사탕 = [1];
    for (let j = 1; j < N; j++) {
      겹치는사탕[j] = 사탕[i][j - 1] == 사탕[i][j] ? 겹치는사탕[j - 1] + 1 : 1;
    }
    최댓값 = Math.max(...겹치는사탕, 최댓값);
  }
}
function 열확인() {
  for (let i = 0; i < N; i++) {
    let 겹치는사탕 = [1];
    for (let j = 1; j < N; j++) {
      겹치는사탕[j] = 사탕[j - 1][i] == 사탕[j][i] ? 겹치는사탕[j - 1] + 1 : 1;
    }
    최댓값 = Math.max(...겹치는사탕, 최댓값);
  }
}
