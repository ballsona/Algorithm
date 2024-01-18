const fs = require('fs');
const inputs = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .split('\n');

const [M, N] = inputs[0].split(' ').map((n) => +n);
const Graph = new Array(M).fill().map((_, i) => inputs[i + 1].split(' ').map((i) => +i));

console.log(solution(Graph));

// (1,1)에서 (n,n) 좌표로 이동 경우의 수. 값이 작은 좌표로만 이동 가능
function solution(graph) {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  // 해당 좌표에서 끝 좌표로 이동 가능한 경우의 수 저장
  const dp = new Array(M).fill().map((i) => new Array(N).fill(-1));
  dp[M - 1][N - 1] = 1;

  function recur(x, y) {
    if (dp[x][y] != -1) {
      return dp[x][y];
    }
    dp[x][y] = 0;
    // 상하좌우 이동. 근데 값이 작은 좌표로만
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx < 0 || nx >= M || ny < 0 || ny >= N) {
        continue;
      }
      if (graph[x][y] > graph[nx][ny]) {
        dp[x][y] += recur(nx, ny);
      }
    }
    return dp[x][y];
  }
  recur(0, 0);

  return dp[0][0];
}
