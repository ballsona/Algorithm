const fs = require('fs');
const inputs = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .split('\n');

const N = +inputs[0];
const Arr = inputs.slice(1).map((s) => s.split(' ').map((n) => +n)); // [상담 기간, 받는 금액]

// 상담으로 얻을 수 있는 최대 수익 구하기
//let max = -1;
//solution_recur(0, 0);
//console.log(max);

//console.log(solution_topdown_dp());
console.log(solution_bottomup_dp());

/////////////////////////////

// 재귀 이용한 풀이
function solution_recur(idx, money) {
  // 마지막 인덱스라면 결과값 최대인지 비교
  if (idx === N) {
    max = Math.max(money, max);
    return;
  }
  // 가능하다면. 상담 하기
  if (idx + Arr[idx][0] <= N) {
    solution_recur(idx + Arr[idx][0], money + Arr[idx][1]);
  }
  // 상담 안하기
  solution_recur(idx + 1, money);
}

// 탑다운 DP 이용한 풀이
function solution_topdown_dp() {
  const prefix = new Array(N + 1).fill(-1);

  function dp_recur(idx) {
    if (idx == N) {
      return 0;
    }
    if (idx > N) {
      return -9999;
    }
    if (prefix[idx] != -1) {
      return prefix[idx];
    }
    // 상담 안하기 vs 하기
    prefix[idx] = Math.max(dp_recur(idx + Arr[idx][0]) + Arr[idx][1], dp_recur(idx + 1));
    return prefix[idx];
  }
  dp_recur(0);

  return prefix[0];
}

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
