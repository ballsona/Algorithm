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

  function parametricSearch(x, y) {
    let ans = Infinity;
    let start = 1;
    let end = 1000000000;

    while (start <= end) {
      let mid = parseInt((start + end) / 2);
      let z = Math.floor((100 * (y + mid)) / (x + mid));
      // 값이 다르면
      if (z !== init_z) {
        ans = Math.min(ans, mid);
        end = mid - 1;
      }
      // 값이 같으면
      else {
        start = mid + 1;
      }
    }
    return ans === Infinity ? -1 : ans;
  }

  let [X, Y] = inputs[0].split(' ').map((s) => parseInt(s));
  const init_z = Math.floor((100 * Y) / X);

  if (init_z >= 99) {
    console.log(-1);
  } else {
    console.log(parametricSearch(X, Y));
  }

  /////////////////////////////
  process.exit();
});

// 1~MAX 부터 시작해서 mid 값을 확인하며 end값을 조정해서 범위를 좁혀가는 과정.
// 만약 mid값을 더한 값이 z와 같아지는 순간 start값을 조정해서 시작점을 구한다.
