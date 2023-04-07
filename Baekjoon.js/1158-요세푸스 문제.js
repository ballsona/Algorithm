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
  const [n, k] = inputs[0].split(' ').map((s) => parseInt(s));
  let arr = new Array(n).fill(1).map((z, i) => z + i);
  let ans = [];

  let p = 0;
  while (arr.length >= k) {
    p = p + k - 1 > arr.length - 1 ? p + k - arr.length - 1 : p + k - 1;
    ans.push(arr[p]);
    arr = arr.filter((n) => n !== arr[p]);
  }
  //  나머지는?
  while (arr.length > 0) {
    p = (p + k - 1) % arr.length;
    ans.push(arr[p]);
    arr = arr.filter((n) => n !== arr[p]);
  }
  console.log(`<${ans.join(', ')}>`);

  /////////////////////////////
  process.exit();
});
