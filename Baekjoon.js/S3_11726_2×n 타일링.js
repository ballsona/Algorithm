const fs = require('fs');
const inputs = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .split('\n');

const N = +inputs[0];
console.log(solution(N));

// bottom up dp
function solution(n) {
  // 현재 좌표에서 타일 깔 수 있는 모든 경우의 수
  const dp = new Array(n).fill(0);
  dp[n - 1] = 1;
  dp[n - 2] = 2;

  for (let i = n - 3; i >= 0; i--) {
    // 타일 세로로 놓기 + 타일 가로로 놓기
    dp[i] = (dp[i + 1] + dp[i + 2]) % 10007;
  }
  return dp[0] % 10007;
}
