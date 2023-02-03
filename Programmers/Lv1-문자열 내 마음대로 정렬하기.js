function solution(strings, n) {
  var answer = [];

  var base = strings.map((s) => s[n]).sort();

  base = [...new Set(base)]; // 중복 제거
  base.forEach((b) => {
    var strs = strings.filter((s) => s[n] === b).sort();
    answer = [...answer, ...strs];
  });
  return answer;
}

// n번째의 문자 기준으로 문자들을 정렬할 것

// n번째 문자들을 추출해서 정렬한다.
// 그 순서대로 각 문자를 가지고 있는 문자를 차례로 넣을건데
// 만약에 n번째 문자를 가지고 있는 애들이 여러개면... 배열에 넣고 다시 오름차순 정렬해서 푸쉬한다.

// js localeCompare() 함수도 사용가능
