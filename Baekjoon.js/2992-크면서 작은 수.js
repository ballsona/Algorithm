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
  const X = parseInt(inputs[0]);
  const arr = [inputs[0]];

  function getCombinations(arr, N) {
    const results = [];
    if (N === 1) return arr.map((value) => [value]);

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      // 해당하는 fixed를 제외한 나머지 뒤
      const combinations = getCombinations(rest, N - 1);
      // 나머지에 대해서 조합을 구한다.
      const attached = combinations.map((combination) => [
        fixed,
        ...combination,
      ]);
      // 돌아온 조합에 떼 놓은(fixed) 값 붙이기
      results.push(...attached);
    });
    console.log(results);
    return results;
  }

  /////////////////////////////
  process.exit();
});

// 브루트포스 알고리즘
