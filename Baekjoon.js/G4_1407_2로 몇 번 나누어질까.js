const fs = require('fs');
const inputs = fs.readFileSync('input.txt').toString().trim();

// A,B의 범위가 1≤A≤B≤10^15 이므로. BigInt를 사용해주어야 한다. (참고로 그냥 int는 2^32까지 표현 가능하고 이는 대략 10^9임)
let [A, B] = inputs.split(' ').map(BigInt);

A -= 1n;

let sumA = A;
for (let i = 2n; i <= A; i *= 2n) {
  sumA += (A / i) * (2n ** i - 2n ** (i - 1n));
}

let sumB = B;
for (let i = 2n; i <= B; i *= 2n) {
  sumB += (B / i) * (2n ** i - 2n ** (i - 1n));
}

console.log((sumB - sumA).toString());
