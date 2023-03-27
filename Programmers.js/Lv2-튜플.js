function solution(s) {
  const arr = JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']'));
  arr.sort((a, b) => a.length - b.length);

  let answer = [];
  arr.forEach((a) => {
    a.forEach((n) => {
      if (!answer.find((ans) => ans === n)) {
        answer.push(n);
      }
    });
  });
  return answer;
}
