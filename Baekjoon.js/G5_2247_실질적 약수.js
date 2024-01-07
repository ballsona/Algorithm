const fs = require('fs');
const inputs = fs.readFileSync('input.txt').toString().split('\n');

const N = parseInt(inputs[0]);
console.log(solution(N));

// CSOD(n) = 1~n의 실질적 약수 합
function solution(n) {
  let sum = 0;
  for (let i = 2; i <= n / 2 + 1; i++) {
    sum += (i * (Math.floor(n / i) - 1)) % 1000000;
  }
  return sum % 1000000;
}
