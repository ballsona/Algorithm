const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = +inputs[0];
const T = +inputs[1];
solution();

/////////////////////////////

function solution() {
  const graph = new Array(N).fill().map((_) => new Array(N).fill(0));
  const half = Math.floor(N / 2);

  let [x, y] = [half, half];
  let [t, l] = [1, 3];
  graph[x][y] = t;

  while (l <= N) {
    // 이동 시작
    graph[x--][y] = t++;
    // 오른쪽으로 이동
    for (let i = 0; i < l - 2; i++) graph[x][y++] = t++;
    // 아래로 이동
    for (let i = 0; i < l - 1; i++) graph[x++][y] = t++;
    // 왼쪽으로 이동
    for (let i = 0; i < l - 1; i++) graph[x][y--] = t++;
    // 위로 이동
    for (let i = 0; i < l - 1; i++) graph[x--][y] = t++;

    l += 2;
  }
  graph[x][y] = N ** 2;

  let [tx, ty] = [0, 0];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (graph[i][j] == T) [tx, ty] = [i + 1, j + 1];
    }
  }

  // 그래프 출력
  console.log(graph.map((s) => s.join(' ')).join('\n'));
  // 좌표 출력
  console.log(tx, ty);
  return 1;
}
