const fs = require('fs');
const inputs = fs.readFileSync('input.txt').toString().split('\n');

const [N, M] = inputs[0].split(' ').map(Number);
const [Graphs, Ranges] = [new Array(N), new Array(M)];

for (let i = 0; i < N; i++) Graphs[i] = inputs[i + 1].split(' ').map(Number);
for (let i = 0; i < M; i++) Ranges[i] = inputs[i + N + 1].split(' ').map(Number);
console.log(solution(Graphs, Ranges));

// 2차원 누적합 배열 구하기
function solution(graphs, ranges) {
  const prefix = new Array(N).fill().map(() => new Array(N).fill(0));

  for (let j = 0; j < N; j++) {
    for (let i = 0; i < N; i++) {
      if (j == 0 && i == 0) prefix[j][i] = graphs[0][0];
      else if (j == 0) prefix[j][i] = prefix[j][i - 1] + graphs[j][i];
      else if (i == 0) prefix[j][i] = prefix[j - 1][i] + graphs[j][i];
      else {
        prefix[j][i] =
          prefix[j - 1][i] + prefix[j][i - 1] - prefix[j - 1][i - 1] + graphs[j][i];
      }
    }
  }
  const arr = [];
  for (let i = 0; i < M; i++) {
    const [x1, y1, x2, y2] = ranges[i].map((n) => n - 1); // 좌표 to 배열 인덱스
    if (x1 == x2 && y1 == y2) {
      arr.push(graphs[x1][y1]);
      continue;
    }
    let area = prefix[x2][y2];
    if (y1 > 0) area -= prefix[x2][y1 - 1];
    if (x1 > 0) area -= prefix[x1 - 1][y2];
    if (x1 > 0 && y1 > 0) area += prefix[x1 - 1][y1 - 1];
    arr.push(area);
  }
  return arr.join('\n');
}
