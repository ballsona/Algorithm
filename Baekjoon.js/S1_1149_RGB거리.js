const fs = require('fs');
const inputs = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .split('\n');

const N = +inputs[0];
const Costs = inputs.slice(1).map((i) => i.split(' ').map((n) => +n));
console.log(solution_dp(Costs));

/////////////////////////////

// dp
function solution_dp(costs) {
  const dp = new Array(N).fill().map((i) => new Array(3).fill(-1));

  for (let i = N - 1; i >= 0; i--) {
    if (i == N - 1) {
      dp[i] = costs[i];
      continue;
    }
    // [R,G,B] 각각 색 칠했을 때 비용 최소 만들기.
    dp[i][0] = Math.min(dp[i + 1][1], dp[i + 1][2]) + costs[i][0];
    dp[i][1] = Math.min(dp[i + 1][2], dp[i + 1][0]) + costs[i][1];
    dp[i][2] = Math.min(dp[i + 1][1], dp[i + 1][0]) + costs[i][2];
  }

  return Math.min(...dp[0]);
}

// recur
function solution_recur(costs) {
  let min = 10000;

  function recur(idx, colorIdx, sum) {
    if (idx == N) {
      min = Math.min(min, sum);
      return;
    }

    // 현재 컬러를 제외한 컬러를 다음 집에 바르기.
    [0, 1, 2].forEach((n) => {
      if (n !== colorIdx) {
        recur(idx + 1, n, sum + costs[idx][colorIdx]);
        recur(idx + 1, n, sum + costs[idx][colorIdx]);
      }
    });
  }
  recur(0, 0, 0); // r
  recur(0, 1, 0); // g
  recur(0, 2, 0); // b

  return min;
}
