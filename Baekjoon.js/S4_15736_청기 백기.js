const fs = require('fs');
const inputs = fs.readFileSync('input.txt').toString().split('\n');

const N = parseInt(inputs[0]);
console.log(solution(N));

// 1~n 사이 제곱 수 개수 구하기 -> n을 루트로 나눈 값보다 작은 정수 중 가장 큰 수 구하기.
function solution(n) {
  return Math.floor(Math.sqrt(n));
}
