const fs = require('fs');
const inputs = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .split('\n');

const N = parseInt(inputs[0]);
const Src = inputs.slice(1).map((s) => s.split(' ').map((n) => +n)); // [S,B]

let min = 999999999;
solution(0, 0, 0, false);
console.log(min);

/////////////////////////////

function solution(i, s, b, noWater) {
  // 마지막 재료라면 재료 하나라도 들어가있는 지 확인 -> 최솟값 구하기
  if (i === N) {
    if (noWater) min = Math.min(min, Math.abs(s - b));
    return;
  }

  // 재료 넣기
  solution(i + 1, s == 0 ? Src[i][0] : s * Src[i][0], b + Src[i][1], true);
  // 재료 안넣기
  solution(i + 1, s, b, noWater);
}
