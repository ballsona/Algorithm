const fs = require('fs');
const inputs = fs.readFileSync('input.txt').toString().split('\n');

const K = parseInt(inputs[0]);
const arr = [];
solution(K);

console.log(arr.length);
console.log(arr.sort((a, b) => a - b).join(' '));

/////////////////////////////

// k를 최대한 많은 약수로 소인수분해 하기
function solution(n) {
  if (n <= 3) {
    arr.push(n);
    return;
  }
  for (let i = Math.floor(Math.sqrt(n)); i >= 1; i--) {
    if (i == 1) {
      arr.push(n);
      return;
    }
    if (n % i == 0) {
      solution(i);
      solution(n / i);
      return;
    }
  }
}
