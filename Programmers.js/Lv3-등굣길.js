function solution(m, n, puddles) {
  // 해당 좌표부터 학교까지 최단 경로
  const paths = new Array(n).fill().map((_) => new Array(m).fill(0));
  paths[n - 1][m - 1] = 1;
  puddles.forEach((p) => {
    paths[p[1] - 1][p[0] - 1] = -2;
  });

  const d = [
    [1, 0],
    [0, 1],
  ];
  function dp(x, y) {
    if (paths[x][y] > 0) return paths[x][y] % 1000000007;

    for (let i = 0; i < 2; i++) {
      const [nx, ny] = [x + d[i][0], y + d[i][1]];
      if (nx < 0 || nx >= n || ny < 0 || ny >= m || paths[nx][ny] == -2) continue;
      paths[x][y] += dp(nx, ny);
    }
    return paths[x][y] % 1000000007;
  }
  dp(0, 0);
  return paths[0][0] % 1000000007;
}

// DP
