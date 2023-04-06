function solution(elements) {
  const nums = new Set();

  for (let i = 0; i < elements.length; i++) {
    for (let j = 0; j < elements.length; j++) {
      const f = elements[0];
      elements = elements.slice(1);
      elements.push(f);
      nums.add(f + elements.slice(0, i).reduce((a, b) => a + b, 0));
    }
  }
  return nums.size;
}
