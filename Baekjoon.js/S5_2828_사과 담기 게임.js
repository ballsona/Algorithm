const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [N, M] = inputs[0].split(' ').map(Number);
const J = +inputs[1];
const Apples = inputs.slice(2).map(Number);

console.log(solution());

/////////////////////////////

function solution() {
  let [start, end] = [1, M];
  let d = 0;

  for (let i = 0; i < Apples.length; i++) {
    const ap = Apples[i];
    let t = 0;

    // 바구니 위치에 떨어짐
    if (start <= ap && ap <= end) continue;
    // 바구니 왼쪽
    if (ap < start) {
      t = start - ap;
      [start, end] = [start - t, end - t];
    }
    // 바구니 오른쪽
    if (ap > end) {
      t = ap - end;
      [start, end] = [start + t, end + t];
    }
    d += t;
  }

  return d;
}
