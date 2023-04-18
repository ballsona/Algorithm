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
  const [N, M] = [parseInt(inputs[0]), parseInt(inputs[2])];

  const cards = inputs[1].split(' ').map((s) => parseInt(s));
  cards.sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));

  // 이분 탐색
  function binarySearch(arr, n) {
    let ans = 0;
    let start = 0;
    let end = arr.length - 1;
    let mid = parseInt((start + end) / 2);

    while (start <= end) {
      // 중간값보다 n이 더 큰 경우
      if (arr[mid] < n) {
        start = mid + 1;
      }
      // 중간값보다 n이 더 작은  경우
      else if (arr[mid] > n) {
        end = mid - 1;
      }
      // 중간값이 n인 경우
      else {
        ans = 1;
        break;
      }
      mid = parseInt((start + end) / 2);
    }
    return ans;
  }

  const nums = inputs[3].split(' ').map((s) => parseInt(s));

  let ans = '';
  nums.forEach((num) => {
    ans += `${binarySearch(cards, num)} `;
  });

  console.log(ans);

  /////////////////////////////
  process.exit();
});
