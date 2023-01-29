function getCombinations(arr, num) {
  let results = [];
  if (num === 1) {
    return arr.map((n) => [n]);
  }
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, num - 1);
    const attached = combinations.map((c) => [fixed, ...c]);
    results.push(...attached);
  });
  return results;
}

function solution(number) {
  var answer = 0;
  const stds = getCombinations(number, 3);
  stds.forEach((s) => {
    if (s.reduce((a, b) => a + b) === 0) answer += 1;
  });
  return answer;
}
