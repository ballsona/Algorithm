function solution(land) {
  const L = land.length;

  let arr = new Array(L).fill(0);
  for (i = 0; i < L; i++) {
    arr[i] = new Array(4).fill(0);
  }

  for (i = 0; i < 4; i++) {
    arr[0][i] = land[0][i];
  }

  for (i = 1; i < L; i++) {
    for (j = 0; j < 4; j++) {
      arr[i][j] =
        land[i][j] + Math.max(...arr[i - 1].filter((n, idx) => idx !== j));
    }
  }

  return Math.max(...arr[L - 1]);
}

// 1행부터 한 행씩 내려오되, 같은 열을 연속해서 밟을 수 없다.
// N행 4열... 문제 정확히 읽을 것.

// arr[i][0] = land[i][0] + Math.max(arr[i - 1][1], arr[i - 1][2], arr[i - 1][3]);
// arr[i][1] = land[i][1] + Math.max(arr[i - 1][0], arr[i - 1][2], arr[i - 1][3]);
// arr[i][2] = land[i][2] + Math.max(arr[i - 1][1], arr[i - 1][0], arr[i - 1][3]);
// arr[i][3] = land[i][3] + Math.max(arr[i - 1][1], arr[i - 1][2], arr[i - 1][0]);
