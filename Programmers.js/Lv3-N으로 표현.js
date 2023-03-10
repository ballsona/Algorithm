function solution(N, number) {
  // dp[i]는 i개의 N와 사칙연산을 가지고 만들 수 있는 수의 집합
  const dp = new Array(8).fill().map(() => new Set());

  for (let i = 0; i < 8; i++) {
    dp[i].add(parseInt(`${N}`.repeat(i + 1)));
    for (let j = 0; j < i; j++) {
      for (const arg1 of dp[j]) {
        for (const arg2 of dp[i - j - 1]) {
          dp[i].add(arg1 + arg2);
          dp[i].add(arg1 - arg2);
          dp[i].add(arg1 * arg2);
          dp[i].add(parsetInt(arg1 / arg2));
        }
      }
    }

    if (dp[i].has(number)) {
      return i + 1;
    }
  }
  return -1;
}
