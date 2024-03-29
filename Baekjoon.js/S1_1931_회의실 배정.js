const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let inputs = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = +inputs[0];
let schedules = inputs.slice(1).map((s) => s.split(' ').map(Number));

console.log(solution());

/////////////////////////////

function solution() {
  // 종료 시간, 시작 시간 빠른 순으로 정렬
  schedules = schedules.sort((s1, s2) => {
    if (s1[1] == s2[1]) return s1[0] - s2[0];
    return s1[1] - s2[1];
  });

  let currTime = schedules[0][1];
  let count = 1;

  for (let i = 1; i < N; i++) {
    if (schedules[i][0] >= currTime) {
      currTime = schedules[i][1];
      count++;
    }
  }

  return count;
}
