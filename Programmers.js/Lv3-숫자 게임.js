function solution(A, B) {
  const sortedA = A.sort((a, b) => a - b);
  const sortedB = B.sort((a, b) => a - b);
  const l = A.length;

  let [p1, p2] = [0, 0];
  let score = 0;
  while (p1 < l && p2 < l) {
    if (sortedA[p1] < sortedB[p2]) {
      score++;
      p1++;
      p2++;
    } else {
      p2++;
    }
  }

  return score;
}

/**
 * A의 출전 순서가 정해져 있기 때문에, A의 각 숫자들을 가장 작은 차이로 (= 작은 수는 최대한 작은 수가 이기도록) 이기게끔 하자.
 *
 * 1. A,B 오름차순 정렬
 * 2. 2개의 포인터를 사용. 만약 A[p1]보다 B[p2]가 크다면, B[p2]는 A[p1]를 이길 수 있는 가장 작은 수다. 따라서 p1, p2 각각 1 증가
 * 3. 만약 작거나 같다면, A[p1]를 이길 수 있는 최솟값을 찾을때까지 p2만 1 증가시킨다.
 *
 */
