const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = +inputs[0]; // N x N
const K = +inputs[1]; // 사과 개수
const Apples = inputs.slice(2, K + 2).map((s) => s.split(' ').map(Number)); // 사과 좌표 배열
const L = +inputs[K + 2]; // 뱀의 방향 전환 횟수
const Moves = inputs.slice(K + 3).map((s) => s.split(' ')); // 뱀의 방향 전환 정보

console.log(solution());

/////////////////////////////

function solution() {
  // 그래프: 아무것도 없으면 0. 뱀이 있으면 1. 사과가 있으면 2
  const graph = new Array(N).fill().map((_) => new Array(N).fill(0));
  Apples.forEach((apple) => {
    const [i, j] = apple;
    graph[i - 1][j - 1] = 2;
  });

  let [t, cx, cy] = [0, 0, 0]; // 시간, 머리 좌표
  let [dx, dy] = [0, 1];
  let i = 0;

  // 뱀 좌표 히스토리: 최대 개수 = 사과 개수
  const snakes = [[0, 0]];
  graph[0][0] = 1;

  while (1) {
    t++;

    // 이동
    cx += dx;
    cy += dy;
    // 자기 자신 혹은 벽에 부딪히는 경우
    if (cx < 0 || cx >= N || cy < 0 || cy >= N || graph[cx][cy] == 1) break;

    // 사과가 있는 경우 꼬리 넣고, 없으면 꼬리 빼기
    if (graph[cx][cy] != 2) {
      const [tx, ty] = snakes.shift();
      graph[tx][ty] = 0;
    }

    snakes.push([cx, cy]);
    graph[cx][cy] = 1;

    // 방향 전환
    if (i < L && t == +Moves[i][0]) {
      if (Moves[i][1] == 'D') [dx, dy] = [dy, -dx];
      else [dx, dy] = [-dy, dx];
      i++;
    }
  }

  return t;
}
