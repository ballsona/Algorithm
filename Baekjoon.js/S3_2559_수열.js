const fs = require('fs');
const inputs = fs.readFileSync('input.txt').toString().split('\n');

const [N, K] = inputs[0].split(' ').map(Number);
const numbers = inputs[1].split(' ').map(Number);

console.log(solution(numbers, N, K));

// K개의 연속된 숫자 뽑아서 누적합 구하고. 그 중 최댓값 구하기
function solution(nums, n, k) {
  const prefix = new Array(n).fill(0);
  prefix[0] = nums[0];

  // 완전 탐색 X -> 누적합 배열 생성해서 메모이제이션 하기
  for (let i = 1; i < n; i++) {
    prefix[i] = prefix[i - 1] + nums[i];
  }
  // 연속된 숫자 k개씩 묶어서 더한 값
  const cont = new Array(n - k + 1).fill(0);
  for (let i = n - 1; i >= k; i--) {
    cont[n - 1 - i] = prefix[i] - prefix[i - k];
  }
  cont[n - k] = prefix[k - 1];
  return Math.max(...cont);
}
