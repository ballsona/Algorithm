function solution(n, costs) {
  // 간선 가중치 오름차순 정렬
  costs = costs.sort((i1, i2) => {
    return i1[2] - i2[2];
  });

  // union-find
  const root = new Array(n).fill(0).map((x, i) => i);
  function find(x) {
    if (root[x] == x) return x;
    else return (root[x] = find(root[x]));
  }
  function union(x, y) {
    const [px, py] = [find(x), find(y)];
    root[px] = py;
  }

  // 최소 비용으로 간선 연결
  let fcost = 0;
  for (let i = 0; i < costs.length; i++) {
    const [n1, n2, c] = costs[i];
    if (i == 0) {
      union(n1, n2);
      fcost += c;
      continue;
    }
    // 사이클 형성하지 않는 간선인 경우 연결
    if (find(n1) != find(n2)) {
      union(n1, n2);
      fcost += c;
    }
  }
  return fcost;
}

// 크루스칼 MST
