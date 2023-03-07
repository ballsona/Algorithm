// n=3,2 -> x%n=0이라면 x/n
// n=1  -> x-1
// 위 연산을 이용해서 x를 1로 만들거임. 연산 횟수 최솟값

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const n = parseInt(input[0]);

const dp = new Array(30000).fill(0);

// 1은 아무짓도 안해도 1이므로 dp[1] = 0
// 2는 1빼면 되므로 dp[2] = 1
// 3은 3으로 나누면 나누어 떨어지므로 dp[3] = 1

function solution(x) {
  dp[1] = 0;
  dp[2] = 1;
  dp[3] = 1;

  for (i = 4; i <= x; i++) {
    dp[i] = dp[i - 1] + 1;
    if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[parseInt(i / 2)] + 1);
    if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[parseInt(i / 3)] + 1);
  }
  return dp[x];
}

console.log(solution(n));
