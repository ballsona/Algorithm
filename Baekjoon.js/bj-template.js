/** 입력 인자가 하나인 경우 */

const fs = require('fs');
const input1 = fs.readFileSync('/dev/stdin').toString();
const n = parseInt(input1);

function solution(x) {
  return answer;
}
console.log(solution(n));

/** 입력 인자가 여러개인 경우 */

const fs = require('fs');
const input2 = fs.readFileSync('/dev/stdin').toString().split(' ');
const a = parseInt(input2[0]);
const b = parseInt(input2[1]);

function solution(x1, x2) {
  return answer;
}

console.log(solution(a, b));

/** 여러 줄로 입력받는 경우 */

const fs = require('fs');
const input3 = fs.readFileSync('/dev/stdin').toString().split('\n');
const c = parseInt(input3[0]);
const d = parseInt(input3[1]);
//const d = input3[1].split(' ').map((s) => parseInt(s)); // 배열

function solution(x1, x2) {
  return answer;
}

console.log(solution(c, d));

/** template2 */

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = [];

rl.on('line', function (input) {
  inputs.push(input);
}).on('close', function () {
  /////////////////////////////

  /////////////////////////////
  process.exit();
});
