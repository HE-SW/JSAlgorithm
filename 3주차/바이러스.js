let input = require('fs').readFileSync('예제.txt').toString().split('\n');
let computers = Number(input[0]);
let edge_num = Number(input[1]);
let graph = Array.from({ length: computers + 1 }, () => []);
let visited = Array.from({ length: computers + 1 }).fill(0);
let answer = 0;

// 그래프 생성
for (let i = 0; i < edge_num; i++) {
  let start = Number(input[i + 2].split(' ')[0]);
  let end = Number(input[i + 2].split(' ')[1]);
  graph[start].push(end);
  graph[end].push(start);
}
console.log(graph);
console.log(visited);
// 1번노드 방문처리해주고 dfs 시작
visited[1] = 1;
function dfs(start) {
  for (let end of graph[start]) {
    if (!visited[end]) {
      visited[end] = 1;
      answer++;
      dfs(end);
    }
  }
}
dfs(1);
console.log(answer);
