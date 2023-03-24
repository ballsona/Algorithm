const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = ['5 17'];

rl.on('line', function (input) {
  inputs.push(input);
}).on('close', function () {
  /////////////////////////////

  const MAX = 100000;
  const [N, K] = inputs[0].split(' ').map((s) => parseInt(s));

  // bfs
  let seconds = new Array(MAX).fill(0);
  let queue = [];
  queue.push(N);

  function bfs() {
    const f = queue[0];
    if (f === K) return true;

    const dx = [f + 1, f - 1, f * 2];
    for (let i = 0; i < 3; i++) {
      if (seconds[dx[i]] === 0 && dx[i] !== N) {
        queue.push(dx[i]);
        seconds[dx[i]] = seconds[f] + 1;
      }
    }
    console.log(f, queue);
    queue.shift();
    return false;
  }

  while (queue.length > 0) {
    if (bfs()) break;
  }

  console.log(seconds[K]);

  /////////////////////////////
  process.exit();
});

// x -> x-1 or x+1 or x*2
// n -> k
