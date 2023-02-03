function solution(arr, divisor) {
  var answer = [];
  arr.forEach((n) => {
    if (!(n % divisor)) answer.push(n);
  });
  return answer.length ? answer.sort((a, b) => a - b) : [-1];

  //  arr = arr.filter((n) => n % divisor === 0);
  //  return arr.length ? arr.sort((a, b) => a - b) : [-1];
}

// element % divisor 가 0인 오름차순으로 정렬. 없다면 -1
// filter 함수를 쓰는게 효율적
