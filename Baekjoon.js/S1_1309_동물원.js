const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = +inputs[0];
console.log(solution());

/////////////////////////////

// 2*N 배열 상자에 사자 넣는 경우의 수 % 9901
function solution() {
  // [L,R,0]
  const dp = new Array(N + 1).fill().map((i) => new Array(3).fill(0));

  for (let i = N - 1; i >= 0; i--) {
    if (i == N - 1) {
      dp[i][0] = 1;
      dp[i][1] = 1;
      dp[i][2] = 1;
      continue;
    }
    dp[i][0] = (dp[i + 1][1] + dp[i + 1][2]) % 9901;
    dp[i][1] = (dp[i + 1][0] + dp[i + 1][2]) % 9901;
    dp[i][2] = (dp[i + 1][0] + dp[i + 1][1] + dp[i + 1][2]) % 9901;
  }
  const s = dp[0].reduce((a, b) => a + b);
  return s % 9901;
}
