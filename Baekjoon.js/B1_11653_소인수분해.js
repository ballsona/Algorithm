const fs = require('fs');
const inputs = fs.readFileSync('input.txt').toString();

const N = parseInt(inputs);
const arr = [];

if (N !== 1) {
  solution(N);
  console.log(arr.sort((a, b) => a - b).join('\n'));
}

function solution(n) {
  // n이 2 or 3이라면 push하고 종료
  if (n <= 3) {
    arr.push(n);
    return;
  }

  // 루트 n와 가장 가까운 약수를 찾아낸다.
  let t = 1;
  for (i = Math.floor(Math.sqrt(n)); i >= 1; i--) {
    if (n % i == 0) {
      t = i;
      break;
    }
  }
  // 만약 1외의 약수가 없다면 n을 push
  if (t == 1) {
    arr.push(n);
  }
  // 1이 아닌 약수가 있다면 해당 약수를 또 분해
  else {
    solution(t);
    solution(n / t);
  }
}
