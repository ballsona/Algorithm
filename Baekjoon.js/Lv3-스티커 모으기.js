function solution(sticker) {
  const l = sticker.length;

  if (l == 1) {
    return sticker[0];
  } else if (l == 2) {
    return Math.max(...sticker);
  }

  let dp = new Array(l).fill(0);
  let res = -1;
  // 마지막 스티커 포함하는 경우
  dp[l - 1] = sticker[l - 1];
  dp[l - 2] = Math.max(dp[l - 1], sticker[l - 2]);

  for (let i = sticker.length - 3; i >= 1; i--) {
    // 스티커 넣기 vs 안넣기
    dp[i] = Math.max(dp[i + 1], dp[i + 2] + sticker[i]);
  }
  res = dp[1];

  // 마지막 스티커를 포함하지 않는 경우
  dp[l - 1] = 0;
  dp[l - 2] = Math.max(dp[l - 1], sticker[l - 2]);

  for (let i = sticker.length - 3; i >= 0; i--) {
    // 스티커 넣기 vs 안넣기
    dp[i] = Math.max(dp[i + 1], dp[i + 2] + sticker[i]);
  }
  res = Math.max(dp[0], res);

  return res;
}

/** 오랜만에 만난 DP 문제! */
