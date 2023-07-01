function solution(r1, r2) {
  const [rr1, rr2] = [r1 ** 2, r2 ** 2];

  // 큰 원 경계 및 내부에 있는 점 구하기
  let cnt1 = 0;
  for (let x = 1; x <= r2; x++) {
    cnt1 += Math.floor(Math.sqrt(rr2 - x ** 2)) + 1;
  }
  // 작은 원 경계 및 내부에 있는 점 구하기
  let cnt2 = 0;
  let edges = 0;
  for (let x = 1; x <= r1; x++) {
    const y = Math.sqrt(rr1 - x ** 2);
    cnt2 += Math.floor(y) + 1;
    // 경계에 있는 값
    if (y % 1 === 0) edges++;
  }

  // (1사분면에 있는 점) * 4
  return (cnt1 - cnt2 + edges) * 4;
}
