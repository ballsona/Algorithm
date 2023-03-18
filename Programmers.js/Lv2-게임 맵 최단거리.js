// DFS
function solution(maps) {
  let min = 100;
  let dist = new Array(5).fill(100).map(() => new Array(5).fill(100));

  function dfs(x, y, sum) {
    // 더이상 이동하지 못하는 경우
    if ((x > 4) | (x < 0) | (y > 4) | (y < 0)) return;
    if (maps[x][y] === 0) return;
    // 이동 가능한 경우
    if (dist[x][y] > sum) {
      dist[x][y] = sum;
      dfs(x + 1, y, sum + 1);
      dfs(x, y + 1, sum + 1);
      dfs(x, y - 1, sum + 1);
      dfs(x - 1, y, sum + 1);
    }
    // 도착한 경우
    if (x === 4 && y === 4) {
      min = Math.min(sum, min);
    }
  }

  dfs(0, 0, 1);
  return min === 100 ? -1 : min;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ]),
);

// dfs를 통해 풀어보자.
// 재귀함수를 통해 계속 이동을 할건데, 0을 만나면 더이상 갈 수 없음.
// 내가 지나간 곳은 다 0으로 만들어. 나아갈때마다 +1

// 최단거리는 bfs로 푸는걸 추천한단다...
