function solution(n, stations, w) {
  let area = 0; // 전파 설치해야하는 모든 영역

  let start = 1;
  for (let i = 0; i < stations.length; i++) {
    const left = stations[i] - w - start;
    area += left > 0 ? Math.ceil(left / (w * 2 + 1)) : 0;
    start = stations[i] + w + 1;
  }
  const right = n - start + 1;
  area += right > 0 ? Math.ceil(right / (w * 2 + 1)) : 0;

  return area;
}
