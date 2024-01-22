const fs = require('fs');
const inputs = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .split('\n');

const N = +inputs[0];
const Arr = inputs[1].split(' ').map((n) => +n);
const X = +inputs[2];

console.log(solution(X, Arr));

/////////////////////////////

// 두수의 합이 x가 되는 경우의 수
function solution(x, nums) {
  nums.sort((a, b) => a - b);

  // 포인터 움직이면서 두 수의 합이 x일때 s++
  let [p1, p2] = [0, N - 1];
  let c = 0;
  while (p1 < p2) {
    const sum = nums[p1] + nums[p2];
    if (sum == x) {
      c++;
      p1++;
      p2--;
      continue;
    }
    if (sum > x) {
      p2--;
      continue;
    }
    if (sum < x) {
      p1++;
      continue;
    }
  }
  return c;
}
