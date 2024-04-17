function solution(arr1, arr2) {
  const yLen = arr1.length; //행 길이
  const xLen = arr2[0].length; //열 길이
  let answer = new Array(yLen);
  for (let y = 0; y < yLen; y++) {
    const arr = new Array(xLen);
    for (let x = 0; x < xLen; x++) {
      let sum = 0;
      for (let X = 0; X < xLen; X++) {
        sum += arr1[y][X] * arr2[X][x];
      }
      arr[x] = sum;
    }
    answer[y] = arr;
  }
  return answer;
}
