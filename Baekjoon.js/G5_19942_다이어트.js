const fs = require('fs');
const inputs = fs
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
  .toString()
  .split('\n');

const N = +inputs[0];
const [mp, mf, ms, mv] = inputs[1].split(' ').map((s) => +s);
const Foods = new Array(N).fill().map((v, i) => inputs[i + 2].split(' ').map((s) => +s));

console.log(solution(N, Foods));

/////////////////////////////

// 최저 영양소 기준을 만족하는 최소 비용의 식재료 집합 번호
function solution(n, foods) {
  let min = Infinity;
  let minIdxs = [];

  function recur(i, money, arr) {
    if (i > n + 1) return;
    // 영양소 모두 충족했다면 비용이 최솟값인지 비교
    if (arr.length > 0) {
      let [p, f, s, v] = [0, 0, 0, 0];
      arr.forEach((idx) => {
        p = p + foods[idx - 1][0];
        f = f + foods[idx - 1][1];
        s = s + foods[idx - 1][2];
        v = v + foods[idx - 1][3];
      });
      if (p >= mp && f >= mf && s >= ms && v >= mv) {
        if (money < min) {
          min = money;
          minIdxs = arr.slice();
        } else if (money == min) {
          minIdxs = compareArr(minIdxs, arr).slice();
        }
        return;
      }
    }
    // 음식 넣기 vs 안넣기
    if (i <= n) {
      recur(i + 1, money + foods[i - 1][4], [...arr, i]);
      recur(i + 1, money, arr);
    }
  }
  recur(1, 0, []);
  if (minIdxs.length == 0) {
    return -1;
  }
  return `${min}\n${minIdxs.join(' ')}`;
}

function compareArr(arr1, arr2) {
  const t = arr1.length <= arr2.length ? arr1 : arr2;
  for (let i = 0; i < t.length; i++) {
    if (arr1[i] != arr2[i]) return arr1[i] < arr2[i] ? arr1 : arr2;
  }
  return arr1;
}
