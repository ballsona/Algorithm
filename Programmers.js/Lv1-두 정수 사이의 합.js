function solution(a, b) {
  var picks = [];
  const [s, e] = a < b ? [a, b] : [b, a];
  for (let i = s; i <= e; i++) {
    picks.push(i);
  }
  return picks.reduce((s, e) => s + e);
}
