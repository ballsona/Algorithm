const fs = require('fs');
const inputs = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .trim()
  .split('\n');

const N = +inputs[0];
const Trees = inputs
  .slice(1)
  .map((s) => s.split(' '))
  .sort();

console.log(solution_preorder(Trees));
console.log(solution_inorder(Trees));
console.log(solution_postorder(Trees));

/////////////////////////////

function solution_preorder(trees) {
  let res = '';

  function recur(idx) {
    // 나 자신 출력
    res += trees[idx][0];
    // 자식 순회
    trees[idx].slice(1).forEach((child) => {
      if (child !== '.') recur(child.charCodeAt() - 65);
    });
  }
  recur(0);

  return res;
}

function solution_inorder(trees) {
  let res = '';

  function recur(idx) {
    // 왼쪽 자식 순회
    if (trees[idx][1] !== '.') recur(trees[idx][1].charCodeAt() - 65);
    // 나 자신 출력
    res += trees[idx][0];
    // 오른쪽 자식 순회
    if (trees[idx][2] !== '.') recur(trees[idx][2].charCodeAt() - 65);
  }
  recur(0);

  return res;
}

function solution_postorder(trees) {
  let res = '';

  function recur(idx) {
    // 자식 순회
    trees[idx].slice(1).forEach((child) => {
      if (child !== '.') recur(child.charCodeAt() - 65);
    });
    // 나 자신 출력
    res += trees[idx][0];
  }
  recur(0);

  return res;
}
