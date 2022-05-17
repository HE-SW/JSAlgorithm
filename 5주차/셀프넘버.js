answer = [];
selfnumber = 1;
function makeNumber(number) {
  let notself = number;
  while (true) {
    if (number === 0) break;
    notself += number % 10;
    number = parseInt(number / 10);
  }
  return notself;
}
function makeSelf(N) {
  let selfnumbers = Array(10000).fill(false);
  let result = [];

  for (let i = 1; i <= N; i++) {
    let a = makeNumber(i);
    if (a <= N) {
      selfnumbers[a] = true;
    }
  }
  for (let i = 1; i <= N; i++) {
    if (!selfnumbers[i]) {
      result.push(i);
    }
  }
  console.log(result.join('\n'));
}
makeSelf(1000);
