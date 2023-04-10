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
  const N = inputs[0].split('').map((s) => parseInt(s));

  function solution(narr) {
    let res = -1;
    // 0 유무 확인
    if (narr.find((n) => n === 0) === undefined) return res;

    // 합이 3의 배수인지 확인
    const sum = narr.reduce((a, b) => a + b, 0);
    if (sum % 3 !== 0) return res;

    narr.sort((a, b) => b - a);
    return narr.join('');
  }

  console.log(solution(N));
  /////////////////////////////
  process.exit();
});

// 특정 수가 30의 배수가 되려면?
// 10의 배수이야함 -> 0 없으면 안돼
// 3의 배수여야한다 -> 모든 수의 합이 3의배수.
