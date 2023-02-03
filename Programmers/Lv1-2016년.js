function solution(a, b) {
  const DAYS = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const DATES = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  var answer = '';
  var day = 0;

  DATES.slice(0, a).forEach((d, idx) => {
    day += idx === a - 1 ? b : d;
  });
  answer = DAYS[((day % 7) + 3) % 7];
  console.log(day);
  return answer;
}

// a,b는 무슨 요일?
// 7일 주기로 같은 요일. 1월1일부터 몇일 지났느닞.
// 윤년 -> 2월은 29일까지 있다. 31-29-31-30-31-...

// 날짜간 일수 계산 -> 1부터 a까지 돌면서 각 일수를 합산하는 방식으로 구하기.
// (일수 7로 나눈 나머지 + 해당 요일 인덱스값-1) % 7
