const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = +inputs[0];
const F = inputs.slice(1);

console.log(solution());

/////////////////////////////

function solution() {
  const results = new Array(N);

  A: for (let i = 0; i < N; i++) {
    let [p, l, arr] = [F[i * 3], F[i * 3 + 1], F[i * 3 + 2]];
    p = p.split('');
    arr = l > 0 ? arr.slice(1, -1).split(',').map(Number) : [];

    let isReverse = false;

    for (let j = 0; j < p.length; j++) {
      if (p[j] == 'R') {
        isReverse = !isReverse;
        continue;
      }
      // D인데 빈배열인 경우
      if (!arr.length) {
        results[i] = 'error';
        continue A;
      }
      if (isReverse) arr.pop();
      else arr.shift();
    }
    results[i] = `[${isReverse ? arr.reverse() : arr}]`;
  }
  return results.join('\n');
}
