function solution(s) {
  var answer = 0;
  s.split('').forEach((w) => {
    if ('1234567890'.indexOf(w) == -1) {
      answer += 1;
    }
  });
  return !answer && (s.length === 4 || s.length === 6);
}

// s.length === 4 | 6
// 숫자로만 구성? ->  Number("문자로 구성")은 NaN

// NaN 에 대한 비교연산을 할때는 === 아닌 isNaN()를 사용해야한다.
// parseInt는 문자열에 숫자가 아닌 문자가 나오면 그 앞 숫자까지만 정수로 변환하고 멈춘다.

// + 이렇게 하면 풀 수 있을 줄 알았으나. Number("10e1")이 NaN이 아니라 100이라는 사실...
//function solution(s) {
//  return [4, 6].indexOf(s.length) !== -1 && !isNaN(Number(s));
//}
