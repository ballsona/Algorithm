const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = +inputs[0];
const Tree = inputs[1].split(' ').map(Number);
const DeleteNode = +inputs[2];

console.log(solution(DeleteNode));

/////////////////////////////

// 노드 지웠을 때 남은 리프 노드 개수 구하기
function solution(deleteNode) {
  // 자식 정보
  let childs = new Array(N).fill().map(() => []);
  Tree.forEach((node, idx) => {
    if (node != -1) childs[node].push(idx);
  });

  // 제거 노드를 자식으로 가지고 있는 부모 배열 업데이트
  const parentNode = Tree[deleteNode];
  if (parentNode != -1)
    childs[parentNode] = childs[parentNode].filter((n) => n !== deleteNode);
  // 제거 노드 및 자식들 제거
  removeChilds(deleteNode);

  function removeChilds(node) {
    childs[node].forEach((cNode) => {
      removeChilds(cNode);
    });
    childs[node] = null;
  }

  // 리프 노드 개수 구하기
  return childs.filter((c) => c !== null && c.length == 0).length;
}
