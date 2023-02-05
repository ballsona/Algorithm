function solution(t, p) {
  let answer = 0;
  const count = t.length - p.length + 1;

  for (let i = 0; i < count; i++) {
    if (t.substr(i, p.length) <= p) {
      answer += 1;
    }
  }

  return answer;
}
