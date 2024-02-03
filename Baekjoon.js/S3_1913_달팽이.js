const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = +inputs[0];
console.log(solution());

/////////////////////////////

function solution() {
  const graph = new Array(N).fill().map((i) => new Array(N).fill(0));
  const half = Math.floor(N % 2);

  let [x, y] = [half, half];
  let [min, max] = [half - 1, half + 1];
  let num = 1;

  graph[x][y] = num;
  x--;

  while (x == 0 && y == 0) {
    if (x == min && y < max) {
      y++;
    } else if (x <= min && y == max) {
      x++;
    } else if (x == max && y > min) {
      y--;
    } else if (x >= min && y == min) {
      x--;
    }

    // 좌표값 업데이트
    graph[x][y] = num++;
    // 현재 범위 모두 돌면 min, max 업데이트
    if (x == min && y == min) {
      min--;
      max++;
    }
    console.log(graph);
  }
  return 1;
}
