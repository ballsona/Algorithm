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
  const dp = new Array(K + 1).fill(0);

  let prev;
  for (let i = 0; i < N; i++) {
    prev = dp.slice();
    for (let k = 0; k <= K; k++) {
      // 첫번째라면 배수만 일단 모두 1로 채우기
      if (i == 0) {
        if (k % coins[i] == 0) dp[k]++;
        continue;
      }
      // 베수면 1 넣고 아니면 그냥 넣고
      let p = 1;
      while (p * coins[i] <= k) {
        dp[k] += prev[k - p * coins[i]];
        p++;
      }
    }
  }

  return dp[K];
}
