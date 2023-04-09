function solution(numbers) {
  if (!numbers.find((n) => n !== 0)) return '0';
  numbers.sort((a, b) => {
    const [A, B] = [a.toString(), b.toString()];
    const len = Math.min(A.length, B.length);
    for (let i = 0; i < len; i++) {
      if (A[i] !== B[i]) return B[i] - A[i];
    }
    let [temp1, temp2] = [A + B, B + A];
    return temp2 - temp1;
  });
  return numbers.join('');
  // return `${parseInt(numbers.join(""))}`;
}
