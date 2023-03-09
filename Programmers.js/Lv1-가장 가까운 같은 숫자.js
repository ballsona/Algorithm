function solution(s) {
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    const idx = s.slice(0, i).lastIndexOf(s[i]);
    const res = idx == -1 ? -1 : s.slice(0, i).length - idx;
    answer.push(res);
  }
  return answer;
}

function other(s) {
  return [...s].map((char, index) => {
    const idx = s.slice(0, index).lastIndexOf(char);
    return idx < 0 ? idx : index - idx;
  });
}
