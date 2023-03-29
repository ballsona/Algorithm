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

  let [N, K] = inputs[0].split(' ').map((s) => parseInt(s));
  let coins = [];

  for (let i = 1; i <= N; i++) {
    coins.push(parseInt(inputs[i]));
  }

  let count = 0;
  for (let i = N - 1; i >= 0; i--) {
    if (K <= 0) break;
    if (coins[i] <= K) {
      count += parseInt(K / coins[i]);
      K %= coins[i];
    }
  }

  console.log(count);
  /////////////////////////////
  process.exit();
});
