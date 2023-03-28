N = 1260;
count = 0;

const coins = [500, 100, 50, 10];

coins.forEach((c) => {
  count += parseInt(N / c);
  N %= c;
});

console.log(count);
