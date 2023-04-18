const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = [];

rl.on('line', function (input) {
  inputs.push(input);
}).on('close', function () {
  /////////////////////////////
  const N = parseInt(inputs[0]);
  const dist = inputs[1].split(' ').map((s) => BigInt(s));
  const cities = inputs[2].split(' ').map((s) => BigInt(s));

  let res = [];

  let city = cities[0];
  let sum = BigInt(0);
  dist.forEach((d, idx) => {
    sum += city * d;
    // 현재 도시와 다음 도시의 가격을 비교했을때 가격이 더 작은 도시를 다음 도시로 택한다.
    city = city <= cities[idx + 1] ? city : cities[idx + 1];
  });

  console.log(parseInt(sum));

  /////////////////////////////
  process.exit();
});
