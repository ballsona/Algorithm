const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = +inputs[0];
const Images = inputs.slice(1).map((s) => s.split(''));

console.log(solution());

/////////////////////////////

function solution() {
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];

  let graph = new Array(N).fill().map((_) => new Array(N).fill(0));
  let [cnt1, cnt2] = [1, 1];

  // 일반인
  function bfs1(x, y, c) {
    graph[x][y] = c;

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx < 0 || nx >= N || ny < 0 || ny >= N || graph[nx][ny]) continue;
      if (Images[nx][ny] == Images[x][y]) bfs1(nx, ny, c);
    }
  }
  // 적록색맹인
  function bfs2(x, y, c) {
    graph[x][y] = c;

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx < 0 || nx >= N || ny < 0 || ny >= N || graph[nx][ny]) continue;
      if (
        Images[x][y] == Images[nx][ny] ||
        (Images[x][y] == 'R' && Images[nx][ny] == 'G') ||
        (Images[x][y] == 'G' && Images[nx][ny] == 'R')
      )
        bfs2(nx, ny, c);
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!graph[i][j]) bfs1(i, j, cnt1++);
    }
  }

  graph = new Array(N).fill().map((_) => new Array(N).fill(0));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!graph[i][j]) bfs2(i, j, cnt2++);
    }
  }

  return `${cnt1 - 1} ${cnt2 - 1}`;
}
