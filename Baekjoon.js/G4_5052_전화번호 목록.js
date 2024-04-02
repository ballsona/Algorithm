const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = require('fs').readFileSync(filePath).toString().trim().split('\n');

const t = +inputs[0];
const Phones = inputs.slice(1);

console.log(solution());

/////////////////////////////

function solution() {
  const res = new Array(t).fill('YES');

  let x = 0;
  A: for (let r = 0; r < t; r++) {
    const n = +Phones[x];
    const arr = Phones.slice(x + 1, x + n + 1);
    x += n + 1;

    // 길이 순 정렬
    arr.sort((s1, s2) => {
      if (s1.length < s2.length) return s1 - s2;
    });

    for (let i = 0; i < n; i++) {
      const t = arr[i];
      const l = t.length;
      for (let j = 0; j < n; j++) {
        if (i != j && arr[j].slice(0, l) == t) {
          res[r] = 'NO';
          continue A;
        }
      }
    }
  }

  return res.join('\n');
}
