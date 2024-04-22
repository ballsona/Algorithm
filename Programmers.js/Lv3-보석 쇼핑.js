function solution(gems) {
  const counts = {};
  const types = Array.from(new Set(gems)).length;

  let j = 0;
  let [s, e] = [0, 0];
  let ans = [0, gems.length - 1];

  while (s <= gems.length - 1 && e <= gems.length - 1) {
    // 마지막 보석 개수 반영하기
    if (gems[e] in counts) {
      counts[gems[e]]++;
    } else {
      counts[gems[e]] = 1;
      j++;
    }
    // 현재 모든 보석을 한번 이상 개수 세었다면
    if (j == types) {
      // 현재 구간이 최소 구간이라면
      if (e - s < ans[1] - ans[0]) ans = [s, e];
      // 첫번째꺼 중복된 보석이 아니라면 빼기
      counts[gems[s]]--;
      if (counts[gems[s]] == 0) {
        delete counts[gems[s]];
        j--;
        e++;
      }
      s++;
    } else {
      e++;
    }
  }
  return [ans[0] + 1, ans[1] + 1];
}
