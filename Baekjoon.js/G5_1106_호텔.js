const fs = require('fs');
const inputs = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .split('\n');

const [C, N] = inputs[0].split(' ').map((n) => +n); // [늘려야하는 고객 수, 도시 개수]
const Cities = inputs.slice(1).map((s) => s.split(' ').map((n) => +n)); // [도시 홍보 비용, 고객 수]
console.log(solution(Cities));

/////////////////////////////

function solution(cities) {
  const dp = new Array(N).fill().map((i) => new Array(C + 100).fill(10000));

  for (let i = 0; i < N; i++) {
    for (let c = 0; c <= C + 99; c++) {
      if (i == 0) {
        // 해당 도시를 넣을 수 있는 경우에만
        if (c % cities[i][1] == 0) {
          dp[i][c] = (cities[i][0] * c) / cities[i][1];
        }
        continue;
      }
      // 안넣은 경우 vs 넣은 경우. 배수 케이스까지 모두 확인
      dp[i][c] = dp[i - 1][c];
      let p = 1;
      while (p * cities[i][1] <= C + 99) {
        if (c >= cities[i][1] * p) {
          dp[i][c] = Math.min(
            dp[i][c],
            dp[i - 1][c - cities[i][1] * p] + cities[i][0] * p,
          );
        }
        p++;
      }
    }
  }
  console.log(dp);
  return Math.min(...dp[N - 1].slice(C));
}
