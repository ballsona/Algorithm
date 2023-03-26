function solution(maps) {
  const [X, Y] = [maps[0].length, maps.length];
  const map = maps.map((s) => s.split(''));

  // start 좌표 찾기
  let [startX, startY] = [0, 0];
  for (let i = 0; i < X; i++) {
    for (let j = 0; j < Y; j++) {
      if (map[i][j] === 'S') [startX, startY] = [i, j];
    }
  }

  let queue = [];
  let leverOn = false;
  let count = 0;
  let visited = new Array(X).fill(0).map(() => new Array(Y).fill(0));

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  function bfs() {
    const [x, y] = queue[0];
    queue.shift();
    // lever 도착시 visited 초기화
    if (map[x][y] === 'L') {
      leverOn = true;
      visited.map((vst) => vst.map((v) => (v = 0)));
    }
    // exit 도착시
    if (map[x][y] === 'E' && leverOn) return true;
    // 이동 가능
    visited[x][y] = 1;
    for (let i = 0; i < 4; i++) {
      const [newX, newY] = [x + dx[i], y + dy[i]];
      if (
        newX >= 0 &&
        newX < X &&
        newY >= 0 &&
        newY < Y &&
        map[newX][newY] !== 'X' &&
        visited[newX][newY] !== 1
      ) {
        queue.push([newX, newY]);
      }
    }

    return false;
  }

  queue.push([startX, startY]);
  visited[startX][startY] = 1;
  while (queue.length > 0) {
    count += 1;
    for (let i = 0; i < queue.length; i++) {
      if (bfs()) break;
    }
  }
  return count === 1 ? -1 : count - 1;
}

solution(['SOOOL', 'XXXXO', 'OOOOO', 'OXXXX', 'OOOOE']);
solution(['LOOXS', 'OOOOX', 'OOOOO', 'OOOOO', 'EOOOO']);
