const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = +inputs[0];
const Strings = inputs.slice(1);
console.log(solution());

/////////////////////////////

//문제의 규칙을 지키는 문자열인 경우에는  "Infected!"를, 아닌 경우에는 "Good"을 출력
function solution() {
  const res = new Array(N).fill('');
  Strings.forEach((str, idx) => {
    res[idx] = isChromo(str) ? 'Infected!' : 'Good';
  });
  return res.join('\n');
}

function isChromo(str) {
  // 첫 문자 검사하기
  const firstChar = str[0].charCodeAt();
  if (firstChar != 65) {
    if (firstChar < 65 || firstChar > 70) return false;
    str = str.slice(1);
  }
  // 끝문자 검사
  const lastChar = str[str.length - 1].charCodeAt();
  if (lastChar != 67) {
    if (lastChar < 65 || lastChar > 70) return false;
    str = str.slice(0, -1);
  }

  // 가운데문자 AFC 검사 (65 -> 70 -> 67)
  let code = [65, 70, 67];
  let counts = [0, 0, 0];
  let cIdx = 0;

  for (let i = 0; i < str.length; i++) {
    const charCode = str[i].charCodeAt();

    if (charCode == code[cIdx]) {
      counts[cIdx]++;
      continue;
    }
    // 현재 비교할 문자랑 다르다!
    if (counts[cIdx] == 0) {
      return false;
    }
    // 코드 업데이트
    cIdx++;
    if (charCode == code[cIdx]) {
      counts[cIdx]++;
      continue;
    }
    return false;
  }

  return true;
}
