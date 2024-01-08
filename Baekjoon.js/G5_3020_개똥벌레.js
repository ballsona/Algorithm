const fs = require('fs');
const inputs = fs.readFileSync('input.txt').toString().split('\n');

const [N, H] = inputs[0].split(' ').map((n) => +n);
const nums = inputs.slice(1).map((n) => +n);

console.log(solution());

// 파괴해야 하는 장애물의 최솟값과 그러한 구간의 수
function solution() {
  const prefix = new Array(H).fill(0);
  const lines = new Array(H).fill(0);

  for (let i = 0; i < N; i++) {
    if (i % 2 == 0) {
      lines[0] += 1;
      lines[nums[i]] -= 1;
    } else {
      lines[H - nums[i]] += 1;
    }
  }
  prefix[0] = lines[0];
  for (let j = 1; j < H; j++) {
    prefix[j] = prefix[j - 1] + lines[j];
  }
  const min = Math.min(...prefix);
  const count = prefix.filter((n) => n == min).length;
  return `${min} ${count}`;
}
