const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', function (line) {
  for (let i = 0; i < 2 * line - 1; i++) {
    if (i < line) {
      console.log(`${' '.repeat(line - i - 1)}${'*'.repeat(2 * i + 1)}`);
    } else {
      console.log(
        `${' '.repeat(i - line + 1)}${'*'.repeat(4 * line - 2 * i - 3)}`
      );
    }
  }
  rl.close();
}).on('close', function () {
  process.exit();
});
