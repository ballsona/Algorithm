const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = [];

rl.on('line', function (input) {
  inputs.push(input);
}).on('close', function () {
  /////////////////////////////

  // 가로, 세로, 대각선 이동 가능
  let dx = [-1, 1, 0, 0, 1, 1, -1, -1];
  let dy = [0, 0, 1, -1, 1, -1, 1, -1];

  let idx = 0;

  while (1) {
    const [w, h] = inputs[idx].split(' ').map((s) => parseInt(s));

    // 0 0이 나오면 정지
    if (w === 0 && h === 0) break;

    const area = new Array(h).fill(0).map(() => new Array(w).fill(0));

    // 섬 정보 입력
    for (let i = 0; i < h; i++) {
      const tmp = inputs[idx + i + 1].split(' ').map((s) => parseInt(s));
      for (let j = 0; j < w; j++) {
        area[i][j] = tmp[j];
      }
    }

    // dfs
    function dfs(x, y) {
      if ((x < 0) | (x >= h) | (y < 0) | (y >= w)) return false;
      if (area[x][y] === 1) {
        area[x][y] = 0;
        for (let i = 0; i < 8; i++) {
          dfs(x + dx[i], y + dy[i]);
        }
        return true;
      }
      return false;
    }

    // 결과값
    let count = 0;

    for (let i = 0; i < h; i++) {
      for (let j = 0; j < w; j++) {
        if (dfs(i, j)) count += 1;
      }
    }

    console.log(count);

    idx += h + 1;
  }

  /////////////////////////////
  process.exit();
});
