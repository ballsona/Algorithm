const fs = require('fs');
const inputs = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .split('\n');

const N = +inputs[0];
const S = inputs[1];

console.log(solution(N, S));

/////////////////////////////

function solution(n, str) {
  // 인식 가능한 문자개수보다 문자열 길이가 더 작다면
  if (n >= str.length) {
    return str.length;
  }
  let [p1, p2] = [0, n - 1];
  let cnt = 0;

  const obj = {};
  for (let i = p1; i <= p2; i++) {
    if (!(str[i] in obj)) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  }

  while (p2 < str.length - 1) {
    // p2+1를 객체에 넣기
    if (!(str[p2 + 1] in obj)) {
      obj[str[p2 + 1]] = 1;
    } else {
      obj[str[p2 + 1]]++;
    }
    // 현재 객체에 값이 0이 아닌 키 개수 -> N보다 크다면. p1를 제거.
    cnt = Object.values(obj).filter((n) => n > 0).length;
    if (cnt > N) {
      obj[str[p1]]--;
      p1++;
    }
    p2++;
  }
  return p2 - p1 + 1;
}
