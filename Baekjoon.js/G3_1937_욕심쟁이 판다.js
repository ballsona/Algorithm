const fs = require('fs');
const inputs = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .split('\n');

const N = +inputs[0];
const Graph = new Array(N).fill().map((v, i) => inputs[i + 1].split(' ').map((i) => +i));

console.log(solution(N, Graph));

// 모든 지점에서 상하좌우 이동. 더 큰 값으로만 이동 가능. 이동할 수 있는 칸 수 최댓값
// topdown dp
function solution(n, graph) {
  // 해당 좌표에서 이동할 수 있는 최대 거리 저장
  const dp = new Array(n).fill().map((i) => new Array(n).fill(-1)); // n x n

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  function recur(x, y) {
    if (dp[x][y] != -1) {
      return dp[x][y];
    }
    dp[x][y] = 1;
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      // 이동 불가능!
      if (nx < 0 || nx >= n || ny < 0 || ny >= n) {
        continue;
      }
      // 이동 가능!
      if (graph[nx][ny] > graph[x][y]) {
        dp[x][y] = Math.max(dp[x][y], recur(nx, ny) + 1);
      }
    }
    return dp[x][y];
  }

  let max = -1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      max = Math.max(max, recur(i, j));
    }
  }
  return max;
}
