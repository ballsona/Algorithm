const fs = require('fs');
const inputs = fs.readFileSync('input.txt').toString().split('\n');

const T = parseInt(inputs[0]);
const result = [];
for (let i = 1; i < T * 2; i = i + 2) {
  result.push(solution(inputs[i], inputs[i + 1]));
}
console.log(result.join('\n'));

/////////////////////////////

// 어떤 문자를 정확히 K개를 포함하는 가장 짧은 연속 문자열의 길이
// 어떤 문자를 정확히 K개를 포함하고, 문자열의 첫 번째와 마지막 글자가 해당 문자로 같은 가장 긴 연속 문자열의 길이
function solution(w, k) {
  if (k == 1) {
    return '1 1';
  }
  const obj = {};
  let min = 20000;
  let max = -1;
  for (let i = 0; i < w.length; i++) {
    if (w[i] in obj) {
      obj[w[i]].push(i);
      // k개 이상이면
      const len = obj[w[i]].length;
      if (len >= k) {
        min = Math.min(min, obj[w[i]][len - 1] - obj[w[i]][len - k] + 1);
        max = Math.max(max, obj[w[i]][len - 1] - obj[w[i]][len - k] + 1);
      }
    } else obj[w[i]] = [i];
  }

  if (min == 20000) return -1;
  return `${min} ${max}`;
}
