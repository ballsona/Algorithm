function solution(n) {
  const c = n.toString(2).match(/1/g).length;

  let i = n + 1;
  while (i) {
    if (c === i.toString(2).match(/1/g).length) return i;
    i++;
  }
}
