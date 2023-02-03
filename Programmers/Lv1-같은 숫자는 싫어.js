function solution(arr) {
  var picks = [];
  arr.forEach((a, idx) => {
    if (a !== arr[idx - 1]) picks.push(a);
    // 좀 더 Stack 답게 구현하려면
    //if (a !== picks[picks.length - 1]) picks.push(a);
  });
  return picks;
}
