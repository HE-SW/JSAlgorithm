function solution(nums) {
  var answer = 0;
  let sum = 0;
  let prime = true;

  for (let x = 0; x < nums.length - 2; x++) {
    for (let y = x + 1; y < nums.length - 1; y++) {
      for (let z = y + 1; z < nums.length; z++) {
        prime = true;
        sum = nums[x] + nums[y] + nums[z];

        for (let i = 2; i <= Math.sqrt(sum); i++) {
          if (sum % i === 0) {
            prime = false;
            break;
          }
        }
        if (prime) answer++;
      }
    }
  }
  return answer;
}
