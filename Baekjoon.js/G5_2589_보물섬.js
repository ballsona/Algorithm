const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [N, M] = inputs[0].split(' ').map((n) => +n);
const Graphs = inputs.slice(1).map((s) => s.split(''));

/////////////////////////////

const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];

const solution = () => {
  let maxHour = -1;

  // bfs queue
  const bfs = (sX, sY) => {
    const visited = Array.from(Array(N), () => Array(M).fill(false));
    const queue = [[sX, sY, 0]];
    visited[sX][sY] = true;

    let res = 0;
    while (queue.length) {
      const [x, y, hour] = queue.shift();
      res = Math.max(hour, res);

      // 상하좌우 이동하면서 근접 노드를 큐에 추가하기
      for (let i = 0; i < 4; i++) {
        const [nx, ny] = [x + dx[i], y + dy[i]];
        if (nx >= N || nx < 0 || ny >= M || ny < 0) {
          continue;
        }
        if (Graphs[nx][ny] == 'L' && !visited[nx][ny]) {
          queue.push([nx, ny, hour + 1]);
          visited[nx][ny] = true;
        }
      }
    }

    maxHour = Math.max(maxHour, res);
  };

  // 모든 땅 지점에서 출발해보면서 거리 최댓값 갱신하기
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (Graphs[i][j] == 'L') bfs(i, j);
    }
  }

  return maxHour;
};

console.log(solution());
