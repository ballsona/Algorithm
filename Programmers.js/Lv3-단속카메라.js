function solution(routes) {
  const l = routes.length;
  // 진출 지점 기준으로 정렬해야..
  const sRoutes = routes.sort((c1, c2) => c1[1] - c2[1]);

  // Greedy = 카메라 위치를 최대한 진출지점에 가깝게 해서, 다른 차와 겹칠 수 있게 하기.
  let count = 1;
  let camera = sRoutes[0][1];
  for (let i = 0; i < l; i++) {
    if (sRoutes[i][0] > camera) {
      camera = sRoutes[i][1];
      count++;
    }
  }

  return count;
}
