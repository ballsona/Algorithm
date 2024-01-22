const fs = require('fs');
const inputs = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .split('\n');

const N = +inputs[0];
const Nums = inputs[1].split(' ').map(Number);

console.log(solution(Nums));

/////////////////////////////

function solution(nums) {
  const prefix = new Array(N).fill(0);
  prefix[0] = 1;

  for (let i = 1; i < N; i++) {
    // 나보다 값이 작은 애들의 prefix 값 추출
    const t = nums.slice(0, i).map((n, idx) => (n < nums[i] ? prefix[idx] : 0));
    prefix[i] = Math.max(...t) + 1;
  }
  return Math.max(...prefix);
}
