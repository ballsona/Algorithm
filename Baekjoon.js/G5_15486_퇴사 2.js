const fs = require('fs');
const inputs = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .split('\n');

const N = +inputs[0];
const Arr = inputs.slice(1).map((s) => s.split(' ').map((n) => +n));

console.log(solution_bottomup_dp());

/////////////////////////////

// 바텀업 DP 이용한 풀이
function solution_bottomup_dp() {
  const prefix = new Array(N + 1).fill(0);

  for (let i = N - 1; i >= 0; i--) {
    const [T, P] = Arr[i];
    // 마지막 날은 상담 기간이 하루여야만 상담 가능
    if (i == N - 1) {
      prefix[i] = T == 1 ? P : 0;
      continue;
    }
    // 상담 안하기 vs 하기
    prefix[i] = Math.max(0 + prefix[i + 1], i + T <= N ? P + prefix[i + T] : -1);
  }
  return prefix[0];
}
