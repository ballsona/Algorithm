const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = require('fs').readFileSync(filePath).toString().trim().split('\n');

const Str = inputs[0];
const Bomb = inputs[1];

console.log(solution());

/////////////////////////////

function solution() {
  let stack = [];
  const [s, b] = [Str.length, Bomb.length];

  for (let i = 0; i < s; i++) {
    stack.push(Str[i]);

    // 마지막 문자만 비교
    if (Str[i] == Bomb[b - 1]) {
      if (stack.slice(-b).join('') == Bomb) stack.splice(-b);
    }
  }
  const res = stack.join('');
  return res.length > 0 ? res : 'FRULA';
}
