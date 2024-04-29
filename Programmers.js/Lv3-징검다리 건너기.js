function solution(stones, k) {
  let counts = 1000000000000;
  const l = stones.length;

  let [p1, p2] = [0, k];
  let mnum = -1;
  let midx = 0; // 구간 내 최댓값 갖는 index
  while (p1 < l && p2 <= l) {
    mnum = -1;
    midx = 0;
    for (let i = p1; i < p2; i++) {
      if (stones[i] >= mnum) {
        mnum = stones[i];
        midx = i;
      }
    }
    p1 = midx + 1;
    p2 = p1 + k;
    counts = mnum < counts ? mnum : counts;
  }
  return counts;
}
