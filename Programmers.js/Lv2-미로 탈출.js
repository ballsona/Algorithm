function solution(maps) {
  const [X, Y] = [maps[0].length, maps.length];
  const map = maps.map((s) => s.split(''));

  // start 좌표 찾기
  let [startX, startY] = [0, 0];
  for (let i = 0; i < Y; i++) {
    for (let j = 0; j < X; j++) {
      if (map[j][i] === 'S') {
        startX = j;
        startY = i;
      }
    }
  }

  let queue = [];
  let leverOn = false;
  let count = 0;
  let visited = new Array(Y).fill(0).map(() => new Array(X).fill(0));

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  function bfs() {
    const [x, y] = queue[0];
    queue.shift();
    // lever 도착시 visited 초기화
    if (map[y][x] === 'L') {
      leverOn = true;
      visited = new Array(Y).fill(0).map(() => new Array(X).fill(0));
    }
    // exit 도착시
    if (map[y][x] === 'E' && leverOn) return true;
    // 이동 가능
    visited[y][x] = 1;
    for (let i = 0; i < 4; i++) {
      const [newX, newY] = [x + dx[i], y + dy[i]];
      if (
        newX >= 0 &&
        newX < X &&
        newY >= 0 &&
        newY < Y &&
        map[newY][newX] !== 'X' &&
        visited[newY][newX] !== 1
      ) {
        queue.push([newX, newY]);
      }
    }
    console.log(count, queue);
    return false;
  }

  // bfs
  queue.push([startX, startY]);
  visited[startY][startX] = 1;

  while (queue.length > 0) {
    count += 1;
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      if (bfs()) break;
    }
  }

  return count === 0 ? -1 : count;
}

solution(['LOOXS', 'OOOOX', 'OOOOO', 'OOOOO', 'EOOOO']);
