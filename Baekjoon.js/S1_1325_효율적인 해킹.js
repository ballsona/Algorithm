const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [N, M] = inputs[0].split(' ').map(Number);
const trusts = new Array(N + 1).fill().map((i) => []);

inputs.slice(1).forEach((str) => {
  // A가 B를 신뢰한다.
  const [A, B] = str.split(' ').map(Number);
  trusts[B].push(A);
});

console.log(solution());

/////////////////////////////

// 한번에 가장 많은 컴퓨터를 해킹할 수 있는 컴퓨터 번호를 오름차순으로 출력하기
function solution() {
  // bfs. 방문하지 않은 노드만 큐에 추가하기
  function bfs(idx) {
    const queue = [idx];
    const visited = new Array(N + 1).fill(false);
    visited[idx] = true;

    let sum = 0;
    let qhead = 0;
    while (queue.length > qhead) {
      //const comp = queue.shift();
      const comp = queue[qhead++];
      sum++;
      trusts[comp].forEach((cidx) => {
        if (!visited[cidx]) {
          visited[cidx] = true;
          queue.push(cidx);
        }
      });
    }
    return sum;
  }

  const res = new Array(N + 1).fill(-1);
  let maxCount = -1;
  let maxIdxs = [];
  for (let i = 1; i <= N; i++) {
    if (trusts[i].length > 0) {
      res[i] = bfs(i);
      // 최댓값 배열 업데이트
      if (maxCount < res[i]) {
        maxCount = res[i];
        maxIdxs = [i];
      } else if (maxCount == res[i]) {
        maxIdxs.push(i);
      }
    } else {
      res[i] = 1;
    }
  }
  return maxIdxs.join(' ');
}
