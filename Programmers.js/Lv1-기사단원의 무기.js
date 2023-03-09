function solution(number, limit, power) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    let ftr = 1; // 자기 자신 포함
    for (let j = 1; j <= i / 2; j++) {
      if (i % j === 0) ftr++;
    }
    answer += ftr > limit ? power : ftr;
  }
  return answer;
}

// 약수는 본인을 제외하고 n/2 보다 클 수 없다는 점을 고려해서 절반값까지만 약수 여부를 체크했다.
// [약수 알고리즘 참고] https://mine-it-record.tistory.com/522
