const input = require('fs').readFileSync('/dev/stdin').toString().trim();
const a = input
  .split('')
  .map((el) => {
    const tmp = el.charCodeAt();
    return el.charCodeAt() - 3 < 65
      ? String.fromCharCode(tmp - 3 + 26)
      : String.fromCharCode(tmp - 3);
  })
  .join('');
console.log(a.toString());

// let line = fs.readFileSync('/dev/stdin').toString().split('\n');
// 'A'.charCodeAt() = 65 'Z'.charCodeAt() = 90
