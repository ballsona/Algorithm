// N*M
const [N, M] = [4, 5];

// 얼음 틀
const ice = [
  [0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0],
];

// 각 노드 방문 여부 저장
let visited = new Array(N).map(() => new Array(M).fill(false));

// (x,y)가 0일 경우. 재귀적으로 동작하면서 (자신을 포함한) 인접한 0들을 모두 1로 바꾸는 역할 하는 함수
function dfs(x, y) {
  if (x < 0 || x >= N || y < 0 || y >= M) {
    return false;
  }
  if (ice[x][y] === 0) {
    ice[x][y] = 1;
    dfs(x - 1, y);
    dfs(x + 1, y);
    dfs(x, y - 1);
    dfs(x, y + 1);
    return true;
  }
  return false;
}

function solution() {
  let answer = 0;
  for (i = 0; i < N; i++) {
    for (j = 0; j < M; j++) {
      if (dfs(i, j)) answer++;
    }
  }
  return answer;
}

console.log(solution());
