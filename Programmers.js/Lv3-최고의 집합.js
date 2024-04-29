function solution(n, s) {
  const m = Math.floor(s / n);
  const d = s % n;
  if (m < 1) return [-1];

  const arr = new Array(n).fill(m);
  for (let i = 0; i < d; i++) arr[n - i - 1] += 1;

  return arr;
}
