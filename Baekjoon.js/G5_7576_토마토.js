const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [M, N] = inputs[0].split(' ').map((n) => +n); // N * M
const Tomatos = inputs.slice(1).map((s) => s.split(' ').map((n) => +n));

console.log(solution_bfs(Tomatos));

/////////////////////////////

// 1은 익은거. 0은 안익은거. -1은 안들어있음.
// 토마토 모두 익는 데까지 걸리는 기간. 이미 모두 익어있으면 0. 영원히 모두 못익으면 -1 출력.
function solution_bfs(tomatos) {
  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  let queue = [];
  let tomatoBabyCount = 0;

  // 익은 토마토 찾기.
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (tomatos[i][j] == 1) {
        queue.push([i, j, 0]);
        continue;
      }
      if (tomatos[i][j] == 0) tomatoBabyCount++;
    }
  }
  // 익은 토마토 하나도 없으면 -1 출력
  if (queue.length == 0) return -1;
  // 안익은 토마토가 하나도 없으면 0 출력
  if (tomatoBabyCount == 0) return 0;

  let finalDay = 0;
  let changedTomatoCount = 0;
  let qhead = 0;

  while (queue.length > qhead) {
    // queue.shift() 보다 성능 좋음!
    const [x, y, day] = queue[qhead++];

    for (let i = 0; i < 4; i++) {
      // 인근 토마토가 안익었다면 큐에 추가하기
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx >= 0 && nx < N && ny >= 0 && ny < M && tomatos[nx][ny] == 0) {
        queue.push([nx, ny, day + 1]);
        finalDay = day + 1;
        tomatos[nx][ny] = 1;
        changedTomatoCount++;
      }
    }
  }

  if (changedTomatoCount == tomatoBabyCount) return finalDay;
  return -1;
}
