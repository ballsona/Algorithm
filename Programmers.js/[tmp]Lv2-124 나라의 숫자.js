function updateArray(array) {
  const ans = [];
  const nums = [1, 2, 4];
  nums.forEach((n) => {
    array.forEach((arr) => {
      ans.push(arr.concat([n]));
    });
  });
  return ans;
}

function solution(n) {
  let base = [[1], [2], [4]];

  let [i, j] = [3, 0];
  while (1) {
    if (i >= n) break;
    base = updateArray(base);
    j = i;
    i = i * 3 + 3;
  }
  return base[n - j - 1].reverse().join('');
}

// 더 좋은 풀이 생각
