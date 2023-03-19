let visited = new Array(9).fill(false);
visited[0] = true;
let res = [];

let Queue = [];

function bfs(graph, v, visited) {
  visited[v] = true;
  Queue.push(v);

  while (Queue.length > 0) {
    let out = Queue[0];
    res.push(out);
    graph[out].forEach((node) => {
      if (!visited[node]) {
        Queue.push(node);
        visited[node] = true; // 방문 완료
      }
    });
    Queue.shift();
    v++;
  }
}

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

bfs(graph, 1, visited);
console.log(res);

// pop,push,shift,unshift 함수는 리턴 값이 모두 없다.
