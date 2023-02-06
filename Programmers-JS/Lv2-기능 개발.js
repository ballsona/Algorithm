// 스택/큐

function solution(progresses, speeds) {
  var answer = [];
  var days = progresses.map((p, idx) => {
    var c = 0;
    while (p + speeds[idx] < 100) {
      p += speeds[idx];
      c++;
    }
    return c;
  });

  while (days.length) {
    // 다음 작업 시작 index
    var nIdx = days.findIndex((d) => d > days[0]);
    var s = days.splice(0, nIdx === -1 ? days.length : nIdx);
    answer.push(s.length);
  }
  return answer;
}

// 뒤 기능이 앞 기능보다 먼저 개발 가능. 뒤 기능은 앞 기능 배포될때 같이 배포
// 배포는 하루에 한번.

// 각 작업의 배포 몇일후 가능한지 = (남은 퍼센트 - 속도) < 속도 가 될때까지 반복한 횟수.
// [7,3,9] -> [i+1~] 를 돌면서 i값보다 작거나 같은 애들은 같이 배포 -> 배포 개수 배열에 담아.
