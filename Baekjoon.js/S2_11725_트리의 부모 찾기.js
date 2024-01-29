const fs = require('fs');
const inputs = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim()
  .split('\n');

const N = +inputs[0];
const Links = inputs.slice(1).map((s) => s.split(' ').map((n) => +n));

console.log(solution(Links));

/////////////////////////////

// 트리 루트가 1일때. 각 노드들의 부모 노드 구하기
function solution(links) {
  const graph = new Array(N + 1).fill().map(() => []);
  const parents = new Array(N + 1).fill(0);

  links.forEach((link) => {
    const [s, e] = link;
    graph[s].push(e);
    graph[e].push(s);
  });

  // dfs
  const visited = new Array(N + 1).fill(false);
  function recur(node) {
    if (visited[node]) return;
    visited[node] = true;

    graph[node].forEach((child) => {
      if (!visited[child]) {
        parents[child] = node;
        recur(child);
      }
    });
  }
  recur(1);

  return parents.slice(2).join('\n');
}
