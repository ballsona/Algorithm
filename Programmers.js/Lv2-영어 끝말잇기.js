function solution(n, words) {
  let [person, count] = [0, 0];

  const dict = [words[0]];
  for (let i = 1; i < words.length; i++) {
    // 이미 나온 단어라면? or 틀린 단어를 말한다면?
    if (
      dict.find((s) => s === words[i]) ||
      words[i][0] !== words[i - 1].slice(-1)
    ) {
      person = (i + 1) % n === 0 ? n : (i + 1) % n;
      count = Math.round((i + 1) / n);
      break;
    }
    dict.push(words[i]);
  }
  return [person, count];
}
