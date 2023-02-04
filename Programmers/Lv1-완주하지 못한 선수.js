function solution(participant, completion) {
  completion.forEach((n) => (completion[n] = (completion[n] | 0) + 1));
  return participant.find((p) => {
    return !completion[p]--;
  });
}

var g = {};
genres.forEach((gn, i) => {
  g = {
    ...g,
    [gn]: [
      (g[gn][0] | 0) + plays[i], // 총 합
      g[gn][1] ? [...g[gn][1], i] : [i],
    ],
  };
});
