let [N, M, K] = [5, 8, 3];
let numbers = [2, 4, 5, 4, 6];
let sum = 0;

numbers.sort((a, b) => b - a);
numbers = numbers.slice(0, 2);
while (M > 0) {
  for (let i = 0; i < K; i++) {
    if (M === 0) break;
    sum += numbers[0];
    M -= 1;
  }
  sum += numbers[1];
  M -= 1;
}

console.log(sum);
