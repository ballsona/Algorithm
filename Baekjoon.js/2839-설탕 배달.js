const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
const n = parseInt(input);

const dp = new Array(n + 1).fill(0);

dp[3] = 1;
dp[5] = 1;

function solution(x) {
  for (i = 6; i <= x; i++) {
    dp[i] = 0;
    if (dp[i - 3] !== 0) dp[i] = dp[i - 3] + 1;
    if (dp[i - 5] !== 0) dp[i] = dp[i - 5] + 1;
  }

  return dp[x] === 0 ? -1 : dp[x];
}

console.log(solution(n));

// N을 0으로 만들건데. 3*x를 빼거나 5*x를 뺄 수 있다.
// 정확하게 0으로 못만들면 -1을 반환해라.

// dp[i]는 i를 0으로 만드는데 드는 최소 횟수다.
// dp[3], dp[5]는 값이 1로 확실하므로 미리 대입해준다.
// for문을 통해 6부터 차례대로 dp값을 구할 건데, 만약 3이나 5를 뺀 값의 dp값이 0이 아니면 그 값의 1을 더해준다.
