function solution(queue1, queue2) {
  const size = queue1.length;
  let [s1, s2] = [0, 0]; // 현재 큐 시작점
  let sum1 = queue1.reduce((a, b) => a + b);
  let sum2 = queue2.reduce((a, b) => a + b);
  // 이미 합 같다면
  if (sum1 == sum2) {
    return 0;
  }
  // 큐 한바퀴 돌면서 요소 교체하기
  for (let i = 0; i <= size * 2 + 1; i++) {
    if (sum1 > sum2) {
      // t1을 pop해서 q2에 insert
      queue2.push(queue1[s1]);
      sum2 += queue1[s1];
      sum1 -= queue1[s1];
      s1++;
    } else {
      // t2을 pop해서 q1에 insert
      queue1.push(queue2[s2]);
      sum1 += queue2[s2];
      sum2 -= queue2[s2];
      s2++;
    }
    // 결과
    if (sum1 == sum2) {
      return i + 1;
    }
  }

  return -1;
}
