const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (i) {
  input.push(i);
}).on('close', function () {
  /////////////////////////////

  const T = parseInt(input[0]);

  let i = 1;
  while (1) {
    const [M, N, K] = input[i].split(' ').map((s) => parseInt(s));

    // 땅
    const land = new Array(N).fill(0).map(() => new Array(M).fill(0));

    for (let j = i + 1; j <= i + K; j++) {
      const [y, x] = input[j].split(' ').map((s) => parseInt(s));
      land[x][y] = 1;
    }

    // dfs
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    function dfs(x, y) {
      if (x < 0 || x >= N || y < 0 || y >= M) return false;
      if (land[x][y] === 1) {
        land[x][y] = 0;
        for (let i = 0; i < 4; i++) {
          dfs(x + dx[i], y + dy[i]);
        }
        return true;
      }
      return false;
    }

    // 모든 좌표를 돌면서 dfs 호출
    let count = 0;
    for (let x = 0; x < N; x++) {
      for (let y = 0; y < M; y++) {
        if (dfs(x, y)) {
          count += 1;
        }
      }
    }
    // 답
    console.log(count);

    i += K + 1;
    if (i >= input.length) break;
  }

  /////////////////////////////
  process.exit();
});
