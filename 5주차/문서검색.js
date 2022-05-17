let line = require('fs').readFileSync('예제.txt').toString().trim().split('\n');
let doc = line[0];
let wor = line[1];
function sol(doc, wor) {
  a = doc.split(wor).length;
  return a;
}
console.log(sol(doc, wor) - 1);
