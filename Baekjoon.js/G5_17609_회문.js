const fs = require('fs');
const inputs = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .split('\n');

const T = parseInt(inputs[0]);
const result = [];
for (let i = 1; i <= T; i++) {
  result.push(solution(inputs[i]));
}
console.log(result.join('\n'));

/////////////////////////////

// 문자열 그 자체로 회문이면 0, 유사회문이면 1, 그 외는 2를 출력
function solution(str) {
  let [p1, p2] = [0, str.length - 1];

  while (p1 < p2) {
    if (str[p1] == str[p2]) {
      p1++;
      p2--;
    } else {
      if (check(str, p1 + 1, p2) || check(str, p1, p2 - 1)) {
        return 1;
      }
      return 2;
    }
  }
  return 0;
}

// 단어의 (start ~ end) 구간이 회문인지 체크하는 함수
function check(word, start, end) {
  while (start < end) {
    if (word[start] !== word[end]) return false;
    else {
      start++;
      end--;
    }
  }
  return true;
}
