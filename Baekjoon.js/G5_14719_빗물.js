const fs = require('fs');
const inputs = fs.readFileSync('input.txt').toString().split('\n');

const [H, L] = inputs[0].split(' ').map(Number);
const Blocks = inputs[1].split(' ').map(Number);

console.log(solution(Blocks));

/////////////////////////////

// 블록 사이에 고이는 빗물 총량 구하기 - 누적합
function solution(blocks) {
  // 가장 높은 블록을 기준으로 영역 2개로 나누기
  const mh = Math.max(...blocks);
  const mhIdx = blocks.findIndex((bh) => bh == mh);
  const [area1, area2] = [blocks.slice(0, mhIdx), blocks.slice(mhIdx + 1)];

  let sum = 0;
  // 왼쪽 영역에 고이는 빗물 구하기
  if (area1.length > 0 && !isAsc(area1)) {
    sum += area1.reduce((acc, cBlk, cIdx) => {
      if (cIdx == 0) return acc;
      const cMh = Math.max(...area1.slice(0, cIdx));
      return acc + (cBlk >= cMh ? 0 : cMh - cBlk);
    }, 0);
  }
  // 오른쪽 영역에 고이는 빗물 구하기
  if (area2.length > 0 && !isDesc(area2)) {
    sum += area2.reduceRight((acc, cBlk, cIdx) => {
      if (cIdx == area2.length - 1) return acc;
      const cMh = Math.max(...area2.slice(cIdx));
      return acc + (cBlk >= cMh ? 0 : cMh - cBlk);
    }, 0);
  }
  return sum;
}

// arr[0 ~ (i-1)] 중 최댓값이 arr[i]보다 크다면 차잇값을, 아니라면 0을 더해서 누적합 구하기
// 왼쪽 영역 높이가 오름차순, 오른쪽 영역 높이가 내림차순이면 빗물이 고이지 않음
function isAsc(arr) {
  return arr.every((v, idx) => idx == 0 || v >= arr[idx - 1]);
}
function isDesc(arr) {
  return arr.every((v, idx) => idx == 0 || v <= arr[idx - 1]);
}
