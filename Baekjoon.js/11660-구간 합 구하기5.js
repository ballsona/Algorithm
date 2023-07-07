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

  const [N, M] = inputs[0].split(' ').map(Number);
  const sum = new Array(N).fill(new Array(N).fill(0));

  // N*N
  inputs.slice(1, N + 1).forEach((col, cIdx) => {
    const row = col.split(' ').map(Number);
    row.forEach((n, rIdx) => {
      if (cIdx === 0 && rIdx === 0) {
        sum[cIdx][rIdx] = n;
        return;
      }
      if (cIdx > 0 && rIdx === 0) {
        sum[cIdx][rIdx] = sum[cIdx - 1][N - 1] + n;
        return;
      }
      sum[cIdx][rIdx] = sum[cIdx][rIdx - 1] + n;
    });
  });

  console.log(sum);
  /////////////////////////////
  process.exit();
});
