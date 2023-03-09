// 시간 초과
function solution(k, m, score) {
  let answer = 0;
  let apples = score.sort((a, b) => b - a); // 사과 정렬
  const n = parseInt(score.length / m); // 포장 개수

  for (let i = 0; i < n; i++) {
    const box = apples.slice(0, m);
    answer += m * Math.min(...box);
    apples = apples.slice(m);
  }

  return answer;
}

// 첫번째 풀이는 정렬된 score 를 m개씩 쪼개가면서 최소값을 구했는데 꽤나 멍청한 풀이였다
// 그냥 배열에서 (m의 배수)+m-1 에 해당하는 값을 각 상자의 최소값이라고 생각하면 됨.
function solution(k, m, score) {
  let answer = 0;
  let apples = score.sort((a, b) => b - a); // 사과 정렬
  for (let i = 0; i < parseInt(score.length / m); i++) {
    answer += m * apples[i * m + m - 1];
  }

  return answer;
}
