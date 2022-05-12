function solution(n, computers) {
  let answer = 0;
  const visited = Array.from({ length: n }).fill(0);

  function dfs(i) {
    visited[i] = 1; // 방문체크
    for (let j = 0; j < n; j++) {
      if (computers[i][j] && !visited[j]) {
        dfs(j);
      }
    }
    for (let i = 0; i < n; i++) {
      if (!visited[i]) {
        dfs(i);
        answer++;
      }
    }
  }
  return answer;
}
