const fs = require('fs');
const inputs = fs.readFileSync('input.txt').toString().split('\n');

const N = parseInt(inputs[0]);
const nums = inputs[1].split(' ').map(Number);

console.log(solution(nums));

// 전달받은 배열에서 n개의 연속된 수 선택해서 구한 누적합 중 가장 큰 수 구하기
function solution(nums) {
  const prefix = new Array(nums.length).fill(0);
  prefix[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // 현재 값에 누적된 값을 더할지 말지 결정. 누적값 더했는데 작아지면 더할 필요 없음!
    prefix[i] = Math.max(prefix[i - 1] + nums[i], nums[i]);
  }
  return Math.max(...prefix);
}
