// 완전 탐색
function solution(n) {
  let count = 0;

  for (let i = 1; i < n; i++) {
    let sum = i; // i부터 시작해서 연속 숫자들의 누적 합
    for (let j = i + 1; j < n; j++) {
      sum += j;
      if (sum === n) {
        count++;
        break;
      }
      if (sum >= n) break;
    }
  }
  return count + 1;
}

// 공식을 이용한 풀이
function solution2(n) {
  let count = 0;
  for (i = 1; i <= n; i++) {
    if (n % i === 0 && i % 2 !== 0) count++;
  }
  return count;
}
