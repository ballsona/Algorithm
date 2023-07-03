function solution(plans) {
  const stack = [];
  const result = [];
  const pl = plans
    .map((p) => {
      const [h, m] = p[1].split(':');
      const start = parseInt(h) * 60 + parseInt(m);
      return [p[0], start, start + parseInt(p[2])];
    })
    .sort((a, b) => a[1] - b[1]);

  // 내가 끝나는 시간보다 시작하는 시간이 작은 애가 있다면 멈추고 stack에 추가
  // 하나도 없다면 result에 추가
  for (let i = 0; i < pl.length; i++) {
    const isStopped = pl.slice(i + 1).find((p) => p[1] < pl[i][2]);
    if (isStopped) {
      stack.push(pl[i]);
    } else {
      result.push(pl[i]);
    }
  }

  return result.concat(stack.reverse()).map((r) => r[0]);
}
