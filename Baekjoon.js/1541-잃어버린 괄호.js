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

  const solve = (expression) => {
    const getSum = (arr) => {
      return arr
        .split(/[\+-]/)
        .map((v) => +v)
        .reduce((acc, n) => acc + n, 0);
    };
    const firstMinus = expression.indexOf('-');
    if (firstMinus === -1) {
      console.log(getSum(expression));
    } else {
      const plus = getSum(expression.slice(0, firstMinus));
      const minus = getSum(expression.slice(firstMinus + 1));
      console.log(plus - minus);
    }
  };

  solve(inputs);

  /////////////////////////////
  process.exit();
});
