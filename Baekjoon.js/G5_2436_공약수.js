const fs = require('fs');
const inputs = fs.readFileSync('input.txt').toString().split('\n');

const [A, B] = inputs[0].split(' ').map(Number);

console.log(solution(A, B));

/////////////////////////////

// 최소공약수 a이면서 최대공배수가 b이면서 합이 최소인 두 수 구하기
function solution(a, b) {
  const T = b / a;
  for (let i = Math.floor(Math.sqrt(T)); i >= 1; i--) {
    if (T % i == 0) {
      // i 와 (T%i)가 공통 인수를 가지고 있지 않다면 두 수 출력
      if (!div(T / i).some((v) => i % v == 0)) {
        return [i, T / i]
          .sort((x, y) => x - y)
          .map((n) => n * a)
          .join(' ');
      }
    }
  }
}

// n을 소인수분해
function div(n) {
  const arr = [];
  for (let j = Math.floor(Math.sqrt(n)); j >= 2; j--) {
    if (n % j == 0) {
      arr.push(j);
      arr.push(n / j);
    }
  }
  return arr;
}
