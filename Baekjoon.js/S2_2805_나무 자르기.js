const fs = require('fs');
const inputs = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .split('\n');

const [N, M] = inputs[0].split(' ').map((n) => BigInt(n)); // [나무 수, 가져가려는 나무 길이]
const Trees = inputs[1].split(' ').map((n) => +n);

console.log(solution(Trees, M));

/////////////////////////////

// 나무를 잘라서 적어도 M만큼 가져갈건데. 높이 최댓값 구하기
// BigInt
function solution(trees) {
  trees.sort((a, b) => a - b);

  let [min, max] = [0n, BigInt(trees[N - 1n])];

  while (min < max) {
    mid = BigInt(Math.floor((Number(min) + Number(max)) / 2));
    sum = calculateTree(mid, trees);
    console.log(mid, sum);
    if (sum == M) {
      break;
    } else if (sum < M) {
      max = mid;
    } else {
      min = mid;
    }
  }

  return Number(mid);
}

function calculateTree(h, trees) {
  let sum = 0n;
  for (let i = 0n; i < N; i = i + 1n) {
    sum += BigInt(trees[i]) > BigInt(h) ? BigInt(trees[i]) - BigInt(h) : 0n;
  }
  return sum;
}
