const fs = require('fs');
let inputs = fs.readFileSync('input.txt').toString().split('\n');

/** Set Input values */
const N = parseInt(inputs[0]);
inputs = inputs.slice(1).map((str) => str.split(' '));

const [coordsX, coordsY] = [
  inputs.map((i) => parseInt(i[0])),
  inputs.map((i) => parseInt(i[1])),
];

/** Print Answer */
const results = [];
for (k = 1; k <= N; k++) {
  // k개의 점을 한 점으로 모으려 할 때 이동 최소 횟수 구하기
  // k가 1이면 무조건 0
  results.push(k == 1 ? 0 : findShortestPath(k));
}
console.log(results.join(' '));

/** Solution */
function findShortestPath(k) {
  let min = -1;

  coordsX.forEach((i) => {
    coordsY.forEach((j) => {
      // (i,j)와 모든 점들과의 거리를 구하고 arr에 저장
      const arr = [];
      for (z = 0; z < N; z++) {
        arr.push(Math.abs(i - coordsX[z]) + Math.abs(j - coordsY[z]));
      }
      // arr 정렬 후에 작은 값 k개를 합치기
      const s = arr
        .sort((a, b) => a - b)
        .slice(0, k)
        .reduce((a, b) => a + b);
      min = min == -1 ? s : Math.min(min, s);
    });
  });

  return min;
}
