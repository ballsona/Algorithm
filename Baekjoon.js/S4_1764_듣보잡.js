const fs = require('fs');
const inputs = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .split('\n');

const [N, M] = inputs[0].split(' ').map((n) => +n);
const D = inputs.slice(1, N + 1);
const B = inputs.slice(N + 1);

console.log(solution(D, B));

/////////////////////////////

function solution(dArr, bArr) {
  const obj = {};
  for (let i = 0; i < N; i++) {
    obj[dArr[i]] = 1;
  }

  const res = [];
  for (let i = 0; i < M; i++) {
    if (bArr[i] in obj) {
      res.push(bArr[i]);
    }
  }
  return `${res.length}\n${res.sort().join('\n')}`;
}
