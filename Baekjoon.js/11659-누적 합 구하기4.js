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

  const nums = inputs[1].split(' ').map(Number);
  const sums = new Array(nums.length + 1).fill(0);
  const result = [];

  nums.forEach((n, i) => {
    sums[i + 1] = n + sums[i];
  });

  inputs.slice(2).forEach((range) => {
    const [s, e] = range.split(' ').map(Number);
    result.push(sums[e] - sums[s - 1]);
  });

  console.log(result.join('\n'));

  /////////////////////////////
  process.exit();
});
