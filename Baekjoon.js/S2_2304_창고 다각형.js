const fs = require('fs');
const inputs = fs.readFileSync('input.txt').toString().split('\n');

const N = parseInt(inputs[0]);
const Boxs = new Array(N);
for (let i = 0; i < N; i++) {
  Boxs[i] = inputs[i + 1].split(' ').map(Number); // [왼쪽 면 위치, 기둥 높이]
}

console.log(solution(Boxs));

/////////////////////////////

// 가장 작은 창고 다각형 면적 구하기 (누적합으로 풀이)
function solution(boxs) {
  // 위치 정보 기준으로 정렬
  boxs = boxs.sort((b1, b2) => b1[0] - b2[0]);

  // 가장 높은 기둥 기준으로 두 영역으로 쪼개기
  const maxHeight = Math.max(...boxs.map((box) => box[1]));
  const mhIdx = boxs.findIndex((box) => box[1] === maxHeight);
  const [area1, area2] = [boxs.slice(0, mhIdx + 1), boxs.slice(mhIdx)];

  // 두 영역의 면적 + 높은 기둥 높이 구하기
  let sum = maxHeight;
  sum += area1.reduce((acc, cBox, cIdx, area) => {
    if (cIdx == area.length - 1) return acc;
    const x = area[cIdx + 1][0] - cBox[0];
    const y = Math.max(...area.slice(0, cIdx + 1).map((b) => b[1]));
    return acc + x * y;
  }, 0);
  sum += area2.reduceRight((acc, cBox, cIdx, area) => {
    if (cIdx == 0) return acc;
    const x = cBox[0] - area[cIdx - 1][0];
    const y = Math.max(...area.slice(cIdx).map((b) => b[1]));
    return acc + x * y;
  }, 0);

  return sum;
}
