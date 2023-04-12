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
  const [N, M] = inputs[0].split(' ').map((s) => parseInt(s));
  const S = new Set();

  for (let i = 0; i < N; i++) {
    S.add(inputs[i + 1]);
  }

  let count = 0;
  for (let i = 0; i < M; i++) {
    if (S.has(inputs[i + 1 + N])) {
      count += 1;
    }
  }

  console.log(count);

  /////////////////////////////
  process.exit();
});
