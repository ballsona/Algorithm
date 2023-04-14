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
  // K: 수강 가능 인원
  // L: 클릭한 학생 학번 순서
  const [K, L] = inputs[0].split(' ').map((s) => parseInt(s));
  const S = new Set();

  for (let i = 0; i < L; i++) {
    if (S.has(inputs[i + 1])) {
      S.delete(inputs[i + 1]);
    }
    S.add(inputs[i + 1]);
  }

  let c = 0;
  S.forEach((s) => {
    if (c < K) console.log(s);
    c += 1;
  });

  /////////////////////////////
  process.exit();
});
