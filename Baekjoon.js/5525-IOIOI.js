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

  const N = parseInt(inputs[0]);
  const S = inputs[2].split('');

  function createP(n) {
    let P = 'IOI';
    for (let i = 0; i < n - 1; i++) {
      P = P.concat('OI');
    }
    return P;
  }

  let l = S.length - 2; // n
  let ans = 0;
  while (l > 0) {
    if (l % 2 === 0) l -= 1;
    else {
      // S가 P<l>을 가지고 있는지 확인
      const p = createP(l);
      for (let i = 0; i < S.length; i++) {
        if (S.slice(i, i + p.length).join('') === p) {
          ans;
          break;
        }
      }
      l -= 2;
    }
  }

  /////////////////////////////
  process.exit();
});

// IOIOI IOI
// IOIOIOI IOIOI
// Pn은 Pn-1를 2개씩 가지고 있다.
// P의 개수는 무조건 홀수. 3,5,7,9,,,,
