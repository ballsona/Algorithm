const fs = require('fs');
const inputs = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .split('\n');

const N = +inputs[0];
const M = +inputs[1];
const arr = inputs.slice(2).map((s) => s.split(' ').map((n) => +n));

console.log(solution(arr));

/////////////////////////////

// BFS
function solution(arr) {
  const graph = new Array(N + 1).fill().map((i) => []);
  for (let i = 0; i < M; i++) {
    const [s, e] = arr[i];
    graph[s].push(e);
    graph[e].push(s);
  }

  // 1번 컴퓨터가 바이러스 걸렸을 때 전염될 컴퓨터 개수
  const queue = [1];
  let visited = new Array(N + 1).fill(0);

  while (queue.length > 0) {
    const n = queue.shift();
    visited[n] = 1;

    for (let i = 0; i < graph[n].length; i++) {
      if (!visited[graph[n][i]]) queue.push(graph[n][i]);
    }
  }

  return visited.filter((n) => n == 1).length - 1;
}
