const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const N = parseInt(input[0]);

//const N = 2;
//const input = [2, 6, 22];

// 각 테스트 케이스가 담긴 배열
const arr = new Array(N).fill(0);
for (let i = 1; i <= N; i++) {
  arr[i - 1] = parseInt(input[i]);
}

// dp[i] -> [0의 개수, 1의 개수]
let dp = new Array(10000).fill(0).map(() => new Array(2).fill(0));
dp[0] = [1, 0];
dp[1] = [0, 1];

// fibo-count
function solution(i) {
  // dp[i]의 값이 있다면
  if (dp[i][0] !== 0 || dp[i][1] !== 0) {
    return dp[i];
  }
  // dp[i]의 값이 없다면
  else {
    dp[i][0] = solution(i - 1)[0] + solution(i - 2)[0];
    dp[i][1] = solution(i - 1)[1] + solution(i - 2)[1];
  }
  return dp[i];
}

for (let i = 0; i < N; i++) {
  const [zero, one] = solution(arr[i]);
  console.log(zero, one);
}

// N개의 숫자가 주어지는데. 이 숫자를 인자로 넣어 fibo함수를 호출했을 때
// 0,1이 각각 몇번씩 호출되는지 공백 구분해서 출력하자.
