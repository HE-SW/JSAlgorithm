let line = require('fs').readFileSync('예제.txt').toString();
const result = [];
for (let i = 97; i <= 122; i++) {
  result.push(line.indexOf(String.fromCharCode(i)));
}

console.log(result.join(' '));
console.log(line);
// 1. 알파벳 여부 a~z
// 'a'.charCodeAt()= 97 'z'.charCodeAt()= 122s
// String.fromCharCode(97) = 'a'
// let line = fs.readFileSync('/dev/stdin').toString().split('\n');
