const fs = require('fs');
const inputs = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .split('\n');

const [S1, S2] = [inputs[0], inputs[1]];

console.log(solution(S1, S2));

/////////////////////////////

function solution(str1, str2) {
  const [N1, N2] = [str1.length, str2.length];
  const dp = new Array(N1).fill().map((i) => new Array(N2).fill(0));

  // 배열 사이드 채우기
  dp[0][0] = +(str1[0] == str2[0]);
  for (let i = 1; i < N1; i++) {
    dp[i][0] = str1[i] == str2[0] ? 1 : dp[i - 1][0];
  }
  for (let i = 1; i < N2; i++) {
    dp[0][i] = str2[i] == str1[0] ? 1 : dp[0][i - 1];
  }
  // 문자 비교
  for (let i = 1; i < N1; i++) {
    for (let j = 1; j < N2; j++) {
      if (str1[i] === str2[j]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[N1 - 1][N2 - 1];
}
