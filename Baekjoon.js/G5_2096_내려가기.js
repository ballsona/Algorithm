const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let inputs = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = Number(inputs[0]);
inputs = inputs.slice(1).map((s) => s.split(' ').map((n) => +n));

console.log(solution());

/////////////////////////////

// 최대 점수, 최소 점수 출력
function solution() {
  let [min, max] = [0, 0];
  let arr = inputs[0].slice();

  // 최대 점수 구하기
  for (let i = 0; i < N; i++) {
    // 세팅하기
    arr = [Math.max(arr[0], arr[1]), Math.max(...arr), Math.max(arr[2], arr[1])];

    // 더해주기
    if (i != N - 1) {
      for (let j = 0; j < 3; j++) {
        arr[j] += inputs[i + 1][j];
      }
    }
  }
  max = Math.max(...arr);

  // 최소 점수 구하기
  arr = inputs[0].slice();
  for (let i = 0; i < N; i++) {
    // 세팅하기
    arr = [Math.min(arr[0], arr[1]), Math.min(...arr), Math.min(arr[2], arr[1])];

    // 더해주기
    if (i != N - 1) {
      for (let j = 0; j < 3; j++) {
        arr[j] += inputs[i + 1][j];
      }
    }
  }
  min = Math.min(...arr);

  return `${max} ${min} `;
}
