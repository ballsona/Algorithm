const fs = require('fs');
const inputs = fs.readFileSync('input.txt').toString().split('\n');

const N = parseInt(inputs[0]);
const nums = inputs[1].split(' ').map((n) => parseInt(n));

let result = 0;
for (let i = 0; i < N; i++) {
  if (solution(nums[i])) result++;
}
console.log(result);

// n이 소수인지 판단하기 = n이 약수를 가지고 있지 않은지 판단
function solution(n) {
  if (n == 1 || (n != 2 && n % 2 == 0) || (n != 3 && n % 3 == 0)) return false;
  // 약수 있는지 -> 1 ~ half 사이 수를 나눠서 나머지가 0이 아닌지 체크
  const half = Math.sqrt(n);
  for (let i = 2; i <= half; i++) {
    if (n % i == 0) return false;
  }
  return true;
}
