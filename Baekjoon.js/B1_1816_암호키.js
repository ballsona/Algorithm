const fs = require('fs');
const inputs = fs.readFileSync('input.txt').toString().split('\n');

const N = parseInt(inputs[0]);
const nums = inputs.slice(1).map(BigInt);

for (let i = 0; i < N; i++) {
  console.log(solution(nums[i]));
}

function solution(n) {
  for (let i = 2n; i <= 1000000n; i += 1n) {
    if (n % i == 0n) {
      return 'NO';
    }
  }
  return 'YES';
}
