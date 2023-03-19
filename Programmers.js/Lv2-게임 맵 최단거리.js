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

// bfs
function solution(maps) {
  let answer = 1;
  let queue = [];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const n = maps.length;
  const m = maps[0].length;

  queue.push([0, 0]);
  maps[0][0] = 0;

  while (queue.length > 0) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let [x, y] = queue.shift();

      // 저장된 위치에서 위,아래,좌측,우측 이동 가능 경로 확인하기
      for (let j = 0; j < 4; j++) {
        let nx = x + dx[j];
        let ny = y + dy[j];

        if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1) {
          // 도착 지점 바로 직전
          if (nx == n - 1 && ny == m - 1) {
            return answer + 1;
          }
          queue.push([nx, ny]);
          maps[nx][ny] = 0;
        }
      }
    }
    answer++;
  }
  return -1;
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
