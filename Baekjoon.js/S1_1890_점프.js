const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let inputs = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = +inputs[0];
const Game = inputs.slice(1).map((s) => s.split(' ').map((n) => +n)); // 0~9

console.log(solution_dp(N, Game));

/////////////////////////////

// dp
function solution_dp(n, graph) {
  const dp = new Array(n).fill().map(() => new Array(n).fill(0n));
  dp[0][0] = 1n;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      // 목적지 도착 or 더이상 이동 불가
      if ((i == N - 1 && j == N - 1) || dp[i][j] == 0) continue;

      const len = graph[i][j];
      const [right, down] = [j + len, i + len];

      if (right < N) dp[i][right] += BigInt(dp[i][j]);
      if (down < N) dp[down][j] += BigInt(dp[i][j]);
    }
  }
  return dp[n - 1][n - 1].toString();
}

// bfs + queue -> 시간 초과
function solution_bfs(n, graph) {
  const dp = new Array(n).fill().map(() => new Array(n).fill(0));
  const queue = [[0, 0]];

  let count = 0;
  while (queue.length > 0) {
    const [tx, ty] = queue.shift();

    // 목적지인 경우
    if (tx == n - 1 && ty == n - 1) {
      count++;
      continue;
    }
    // 값이 0인 경우
    if (graph[tx][ty] == 0) {
      continue;
    }
    // 아래 or 오른쪽으로 이동
    const [newY, newX] = [ty + graph[tx][ty], tx + graph[tx][ty]];
    if (newX < N && !visited[newX][ty]) {
      queue.push([newX, ty]);
      visited[newX][ty] = true;
    }
    if (newY < N && !visited[tx][newY]) {
      queue.push([tx, newY]);
      visited[tx][newY] = true;
    }
  }

  return count;
}
