const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [N, M] = inputs[0].split(' ').map(Number);
const Links = inputs.slice(1, N).map((s) => s.split(' ').map(Number));
const TargetLinks = inputs.slice(N).map((s) => s.split(' ').map(Number));
console.log(solution(Links, TargetLinks));

/////////////////////////////

function solution(links, targetLinks) {
  // 각 노드에 연결된 모든 노드 정보를 저장
  const nodes = new Array(N + 1).fill().map(() => []); // [node, dist]
  links.forEach((link) => {
    const [n1, n2, dist] = link;
    nodes[n1].push([n2, dist]);
    nodes[n2].push([n1, dist]);
  });

  // dfs: stack + 방문 정보 저장
  const res = [];
  targetLinks.forEach((link) => {
    let [n1, n2] = link;
    let visited = new Array(N + 1).fill(false);
    let dist = 0;

    let stack = [[n1, 0]];
    visited[n1] = true;

    while (stack.length > 0) {
      // 스택에서 꺼낸다
      const [currNode, currDist] = stack[stack.length - 1];
      stack = stack.slice(0, stack.length - 1);

      // 해당 숫자가 n2인지 확인하고 맞다면 종료
      if (currNode == n2) {
        dist = currDist;
        break;
      }
      // 아니라면 방문 안한 주변 노드 스택에 추가한다 + 누적거리와 방문처리도 함께!
      nodes[currNode].forEach((node) => {
        const [n, d] = node;
        if (!visited[n]) {
          visited[n] = true;
          stack.push([n, currDist + d]);
        }
      });
    }
    res.push(dist);
  });
  return res.join('\n');
}
