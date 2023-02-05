function solution(k, score) {
  let scores = [];

  return [...score].map((s, idx) => {
    scores.push(s);
    scores.sort((a, b) => b - a);

    if (idx < k - 1) {
      return scores[idx];
    } else {
      return scores[k - 1];
    }
  });
}
