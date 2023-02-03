//function solution(nums) {
//  var picks = [];
//  nums.forEach((n) => {
//    if (picks.length === nums.length / 2) {
//      return false;
//    }
//    if (picks.indexOf(n) === -1) {
//      picks.push(n);
//    }
//  });
//  return picks.length;
//}

// Set 이용하기
function solution(nums) {
  var targets = new Set(nums);
  return targets.size >= nums.length / 2 ? nums.length / 2 : targets.size;
}

// N/2개를 챙길 수 있다.
// 같은 종류는 같은 번호. 가장 많은 종류의 포켓몬을 선택하는 방법을 찾아서 종류 개수를 리턴해라
