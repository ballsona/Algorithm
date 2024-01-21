const fs = require('fs');
const inputs = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .split('\n');

const [N, K] = inputs[0].split(' ').map((n) => +n);
const Coins = inputs.slice(1).map((s) => s.split(' ').map((n) => +n)); // 동전 가치
console.log(solution(Coins));

/////////////////////////////

function solution(coins) {
  const dp = new Array(N).fill().map((i) => new Array(K + 1).fill(0));

  for (let i = 0; i < N; i++) {
    const value = coins[i];
    for (let k = 0; k <= K; k++) {
      if (i == 0) {
        if (k % value == 0) dp[i][k]++;
        continue;
      }
      dp[i][k] += dp[i - 1][k];
      let p = 1;
      while (p * value <= k) {
        dp[i][k] += dp[i - 1][k - p * value];
        p++;
      }
    }
  }
  return dp[N - 1][K];
}
