const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = +inputs[0];
const nums = inputs[1].split(' ').map((s) => +s);

console.log(solution());

/////////////////////////////

function solution() {
  if (N == 1) return 'A';
  if (nums.every((n) => n == nums[0])) return nums[0];
  if (N == 2) return 'A';

  const a = (nums[1] - nums[2]) / (nums[0] - nums[1]);
  if (a % 1 != 0) return 'B';

  const b = nums[1] - nums[0] * a;

  for (let i = 0; i < N - 1; i++) {
    if (nums[i] * a + b != nums[i + 1]) return 'B';
  }
  return nums[N - 1] * a + b;
}
