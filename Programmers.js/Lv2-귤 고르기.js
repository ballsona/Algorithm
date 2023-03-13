function solution(k, tangerine) {
  const obj = {};

  tangerine.forEach((n) => {
    obj[n] = ++obj[n] || 1;
  });
  const cnts = Object.values(obj).sort((a, b) => b - a);

  let sum = 0;
  let answer = 0;
  for (let num of cnts) {
    answer++;
    sum += num;

    if (sum >= k) break;
  }

  return answer;
}
