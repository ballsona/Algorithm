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

  for (let i = 0; i < inputs.length; i++) {
    const number = Number(inputs[i]);
    const t = number.toString(2);

    if (i !== 0) {
      if (t.length < 3) {
        t = '0'.repeat(3 - t.length) + t;
        result.push(t);
      } else {
        result.push(t);
      }
    } else {
      result.push(t);
    }
  }

  console.log(result.join(``));
  /////////////////////////////
  process.exit();
});
