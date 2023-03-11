function solution(n) {
  let count = 0;
  for (i = 1; i < n; i++) {
    let sum = 0;
    for (j = i; j < n; j++) {
      sum += j;
      if (sum === n) {
        count++;
        break;
      }
      if (sum >= n) {
        break;
      }
    }
  }
  return count + 1;
}
