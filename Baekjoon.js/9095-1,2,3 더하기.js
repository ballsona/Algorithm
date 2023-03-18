const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const N = parseInt(input[0]);

//const N = 3;
//const input = [3, 4, 7, 10];

// 각 테스트 케이스가 담긴 배열
const arr = new Array(N).fill(0);
for (let i = 1; i <= N; i++) {
  arr[i - 1] = parseInt(input[i]);
}

const dp = new Array(10000).fill(0);
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

function solution(n) {
  // 값 있다면
  if (dp[n] !== 0) {
    return dp[n];
  }
  // 값 없다면
  else {
    dp[n] = solution(n - 1) + solution(n - 2) + solution(n - 3);
  }
  return dp[n];
}

for (let i = 0; i < N; i++) {
  console.log(solution(arr[i]));
}

// 각 테스트 케이스마다, n을 1, 2, 3의 합으로 나타내는 방법의 수를 출력
// dp
