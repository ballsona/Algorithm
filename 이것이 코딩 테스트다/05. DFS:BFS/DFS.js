// 각 노드가 방문된 정보
let visited = new Array(9).fill(false);
// 노드 방문 순서
let res = [];

// v는 현재 방문할 노드
function dfs(graph, v, visited) {
  visited[v] = true; // 방문 완료
  res.push(v);
  graph[v].forEach((node) => {
    if (!visited[node]) {
      dfs(graph, node, visited);
    }
  });
}

// 각 노드가 연결된 정보를 담은 인접 리스트
const graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];

dfs(graph, 1, visited);
console.log(res);
