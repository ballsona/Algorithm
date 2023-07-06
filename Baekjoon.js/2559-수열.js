const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = [];

rl.on('line', function (input) {
  inputs.push(input);
}).on('close', function () {
  /////////////////////////////

  const [N, K] = inputs[0].split(' ').map(Number);
  const nums = inputs[1].split(' ').map(Number);

  // 누적합 배열
  const sum = new Array(N - K + 1).fill(0);

  for (let i = 0; i < sum.length; i++) {
    // 첫번째는 K번째 요소까지 합 구하기
    if (i === 0) {
      sum[i] = nums.slice(0, K).reduce((a, b) => a + b);
    }
    // 첫번째 합 - 이전 원소 + 이후 원소
    else {
      sum[i] = sum[i - 1] - nums[i - 1] + nums[i + K - 1];
    }
  }

  console.log(Math.max(...sum));

  /////////////////////////////
  process.exit();
});
