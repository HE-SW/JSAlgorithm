const readLine = require('readline');
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', function (line) {
  let star = '*';
  for (let i = 0; i < line; i++) {
    console.log(`${star.repeat(i + 1)}`);
  }
  rl.close();
}).on('close', function () {
  process.exit();
});
