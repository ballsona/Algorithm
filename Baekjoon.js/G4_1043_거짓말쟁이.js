const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [N, M] = inputs[0].split(' ').map(Number); // [사람 수, 파티 수]
let [truthyCount, ...truthyPeople] = inputs[1].split(' ').map(Number);
let parties = inputs.slice(2).map((str) => str.split(' ').map(Number));

console.log(solution());

/////////////////////////////

// 그래프... BfS + 방문처리
function solution() {
  // 모든 파티에서 거짓말 가능
  if (truthyCount == 0) {
    return M;
  }

  // 그래프 연결
  const nodes = Array.from({ length: N + 1 }).map((_) => []);
  parties.forEach((party) => {
    const [count, ...people] = party;
    if (count == 1) {
      nodes[people[0]].push(people[0]);
    } else {
      people.forEach((p) => nodes[p].push(...people.filter((pp) => pp != p)));
    }
  });

  // 그래프 탐색 -> 진실된 애들 방문
  const visited = Array.from({ length: N + 1 }).fill(false);
  const queue = [...truthyPeople];
  truthyPeople.forEach((tp) => (visited[tp] = true));

  let qhead = 0;
  while (queue.length > qhead) {
    const target = queue[qhead++];

    nodes[target].forEach((node) => {
      if (!visited[node]) queue.push(node);
      visited[node] = true;
    });
  }

  // 방문하지 않은 애들 카운트
  const queue2 = [];
  visited.forEach((v, idx) => {
    if (!v && idx) queue2.push(idx);
  });

  let qhead2 = 0;
  let count = 0;

  while (queue2.length > qhead2) {
    const target2 = queue2[qhead2++];
    if (visited[target2]) continue;
    visited[target2] = true;

    nodes[target2].forEach((node) => {
      if (node == target2) count++;
      else if (!visited[node]) {
        queue2.push(node);
        count++;
      }
    });
  }

  return count;
}
