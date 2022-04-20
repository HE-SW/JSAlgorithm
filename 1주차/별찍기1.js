const readLine = require('readline');
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', function (line) {
  for (let i = 0; i < line; i++) {
    console.log(`${'*'.repeat(i + 1)}`);
  }
  rl.close();
}).on('close', function () {
  process.exit();
});
