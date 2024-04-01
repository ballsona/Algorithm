const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [N, M] = inputs[0].split(' ').map(Number);
const Words = inputs.slice(1);

console.log(solution());

/////////////////////////////

function solution() {
  const counts = {};
  for (let i = 0; i < N; i++) {
    const word = Words[i];

    if (word.length < M) continue;
    if (word in counts) counts[word]++;
    else counts[word] = 1;
  }

  const dicts = Object.keys(counts);
  dicts.sort((w1, w2) => {
    // 빈도순
    if (counts[w1] > counts[w2]) return -1;
    else if (counts[w1] < counts[w2]) return 1;
    else {
      // 길이순
      if (w1.length > w2.length) return -1;
      else if (w1.length < w2.length) return 1;
      // 사전순
      else {
        if (w1 > w2) return 1;
        else if (w1 == w2) return 0;
        else return -1;
      }
    }
  });

  return dicts.join('\n');
}
