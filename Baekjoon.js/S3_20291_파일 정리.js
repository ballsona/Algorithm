const fs = require('fs');
const inputs = fs.readFileSync('input.txt').toString().split('\n');

const N = parseInt(inputs[0]);
const Files = inputs.slice(1);

console.log(solution(N, Files));

/////////////////////////////

// 확장자 이름과 그 확장자 파일 개수를 출력 + 확장자 이름 사전순
function solution(n, files) {
  const ext = files.map((file) => file.split('.')[1]);
  const result = [];

  const obj = {};
  for (let i = 0; i < n; i++) {
    if (!(ext[i] in obj)) {
      obj[ext[i]] = 1;
    } else {
      obj[ext[i]]++;
    }
  }
  for (key in obj) {
    result.push(`${key} ${obj[key]}`);
  }

  return result.sort().join('\n');
}
