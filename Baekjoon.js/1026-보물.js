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
  //const N = parseInt(inputs[0]);
  const A = inputs[1].split(' ').map((s) => parseInt(s));
  const B = inputs[2].split(' ').map((s) => parseInt(s));

  B.sort((a, b) => b - a);
  A.sort((a, b) => a - b);

  let ans = 0;
  A.forEach((a, i) => {
    ans += a * B[i];
  });

  console.log(ans);

  /////////////////////////////
  process.exit();
});

//S = A[0] × B[0] + ... + A[N-1] × B[N-1]
