const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let inputs = require('fs').readFileSync(filePath).toString().trim().split('\n');

const T = Number(inputs[0]);
inputs = inputs.slice(1).map((n) => Number(n));
const answers = [];

console.log(solution());

/////////////////////////////

// 최대 점수, 최소 점수 출력
function solution() {
  const m = Math.max(...inputs);
  const nums = new Array(m).fill(1);

  for (let i = 3; i < m; i++) {
    nums[i] = nums[i - 2] + nums[i - 3];
  }

  for (let i = 0; i < inputs.length; i++) {
    answers.push(nums[inputs[i] - 1]);
  }
  return answers.join('\n');
}

// 1, 1, 1, 2, 2, 3, 4, 5, 7, 9
