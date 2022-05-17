let line = require('fs').readFileSync('예제.txt').toString().trim();
let N = Number(line);

let count = 0;
for (let i = 1; i <= N; i++) {
  let 백의자리 = Math.floor(i / 100);
  let 십의자리 = Math.floor((i % 100) / 10);
  let 일의자리 = Math.floor(i % 10);
  if (i < 100) {
    count++;
  } else if (i >= 100 && i < 1000) {
    if (백의자리 - 십의자리 === 십의자리 - 일의자리) {
      count++;
    }
  }
}
console.log(count);
