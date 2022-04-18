const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', function (line) {
  const a = line
    .split('')
    .map((el) => {
      const tmp = el.charCodeAt();
      return el.charCodeAt() + 3 > 90
        ? String.fromCharCode(tmp + 3 - 26)
        : String.fromCharCode(tmp + 3);
    })
    .join('');
  console.log(a);
  rl.close();
}).on('close', function () {
  process.exit();
});
