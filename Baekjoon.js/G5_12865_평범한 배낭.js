const fs = require('fs');
const inputs = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .split('\n');

const [N, K] = inputs[0].split(' ').map(Number); // 물품의 수와 배낭 무게
const items = inputs.slice(1).map((i) => i.split(' ').map(Number)); // 물건의 무게와 가치

// 배낭에 넣을 수 있는 물건들의 가치합의 최댓값 구하기
//let result = 0;
//solution_recur(0, 0, 0);
//console.log(result);

//console.log(solution_topdown_dp());
console.log(solution_bottomup_dp());

/////////////////////////////

// 재귀 풀이
function solution_recur(idx, weight, value) {
  if (idx == N) {
    result = Math.max(result, value);
    return;
  }
  // 무게 초과되지 않는다면 물건 넣기
  if (weight + items[idx][0] <= K) {
    solution_recur(idx + 1, weight + items[idx][0], value + items[idx][1]);
  }
  // 물건을 넣지 않기
  solution_recur(idx + 1, weight, value);
}

// 탑다운 DP 풀이
function solution_topdown_dp() {
  // 2차원 DP 테이블 생성 -> [100001][n]
  const dp = new Array(N).fill(0).map((i) => new Array(100001).fill(-1));

  function dp_recur(idx, weight) {
    // 누적 무게가 기준보다 넘어버렸다면. 더이상 해당 케이스는 선택되지 않도록 설정.
    if (weight > K) {
      return -1000000;
    }
    if (idx == N) {
      return 0;
    }
    // 이미 계산된 값 있다면 바로 반환
    if (dp[idx][weight] != -1) {
      return dp[idx][weight];
    }
    // 현재 보석 넣고 가치 올리기 vs 안넣고 가치 안올리기
    dp[idx][weight] = Math.max(
      dp_recur(idx + 1, weight + items[idx][0]) + items[idx][1],
      dp_recur(idx + 1, weight),
    );
    return dp[idx][weight];
  }

  return dp_recur(0, 0);
}

// 바텀업 DP 풀이
function solution_bottomup_dp() {
  // 2차원 DP 테이블 생성 -> [100001][n]
  const dp = new Array(N).fill(0).map((i) => new Array(100001).fill(0));

  for (let i = 0; i < N; i++) {
    const [item_weight, item_value] = items[i];
    if (i == 0) {
      dp[i][item_weight] = item_value;
      continue;
    }
    for (let w = 0; w <= K; w++) {
      // 무게 이슈로 보석 넣을 수 없는 경우. 이전 누적 무게가 그대로 들어감.
      if (w < item_weight) {
        dp[i][w] = dp[i - 1][w];
        continue;
      }
      // 현재 보석 넣고 가치 올리기 vs 보석 안넣고 가치 안올리기
      dp[i][w] = Math.max(dp[i - 1][w - item_weight] + item_value, dp[i - 1][w]);
    }
  }
  return Math.max(...dp[N - 1]);
}
