function solution(number, target) {
  let answer = 0;

  dfs(0, 0);

  function dfs(level, sum) {
    if (level === numbers.length) {
      if (sum === target) {
        answer += 1;
      }
      return;
    }
    dfs(level + 1, sum + number[level]);
    dfs(level + 1, sum - number[level]);
  }
  return answer;
}
