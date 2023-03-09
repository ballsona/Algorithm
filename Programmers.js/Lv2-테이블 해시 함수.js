function solution(data, col, row_begin, row_end) {
  // data 정렬
  data.sort((a, b) => {
    if (a[col - 1] > b[col - 1]) return 1;
    if (a[col - 1] < b[col - 1]) return -1;
    else {
      if (a[0] > b[0]) return -1;
      else return 1;
    }
    return 0;
  });

  // S_i 구하기 : row_begin <= i <= row_end
  let S_arr = [];
  data.forEach((arr, idx) => {
    const i = idx + 1;
    if (i >= row_begin && i <= row_end) {
      S_arr.push(arr.reduce((acc, curr) => acc + (curr % i), 0));
    }
  });

  const res = S_arr.reduce((acc, curr) => acc ^ curr, 0);
  return res;
}
