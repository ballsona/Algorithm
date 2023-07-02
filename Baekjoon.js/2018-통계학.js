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
  const n = parseInt(inputs[0]);
  const nums = inputs.slice(1);
  const results = Array(4).fill(0);

  // 산술평균
  results[0] = parseInt(nums.reduce(n, (a, b) => a + b, 0) / n);
  // 중앙값
  results[1] = nums.sort((a, b) => a - b)[parseInt(n / 2)];
  // 최빈값
  const counts = nums.map((num) => nums.filter((n) => n === num).length);
  const maxCounts = nums.filter((n) => n === Math.max(...counts));
  results[2] = maxCounts.length > 0 ? 1 : maxCounts[0];
  // 범위
  results[3] = Math.max(...nums) - Math.min(...nums);

  /////////////////////////////
  process.exit();
});

// N은 홀수
//산술평균 : N개의 수들의 합을 N으로 나눈 값
//중앙값 : N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값
//최빈값 : N개의 수들 중 가장 많이 나타나는 값. 여러 개라면 최빈값 중 두번째로 작은 값
//범위 : N개의 수들 중 최댓값과 최솟값의 차이
