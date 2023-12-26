const fs = require('fs');

let inputs = fs.readFileSync('input.txt').toString().split('\n');

const n = parseInt(inputs[0]);
const hints = inputs.slice(1).map((str) => str.split(' '));

let result = 0;
for (a = 1; a < 10; a++) {
  for (b = 1; b < 10; b++) {
    for (c = 1; c < 10; c++) {
      if (a == b || b == c || c == a) continue;
      if (isValidNumber(a, b, c)) {
        result++;
      }
    }
  }
}
console.log(result);

function isValidNumber(a, b, c) {
  let count = 0;

  // 주어진 힌트 확인하기
  for (i = 0; i < n; i++) {
    const [numbers, strike, ball] = [hints[i][0].split(''), hints[i][1], hints[i][2]];

    const s_count = numbers
      .map((n, idx) => {
        if ((idx == 0 && n == a) || (idx == 1 && n == b) || (idx == 2 && n == c))
          return 1;
        else return 0;
      })
      .reduce((i, j) => i + j);

    const b_count = numbers
      .map((n, idx) => {
        if ((idx != 0 && n == a) || (idx != 1 && n == b) || (idx != 2 && n == c))
          return 1;
        else return 0;
      })
      .reduce((i, j) => i + j);

    if (strike == s_count && ball == b_count) count++;
  }
  return count === n;
}
