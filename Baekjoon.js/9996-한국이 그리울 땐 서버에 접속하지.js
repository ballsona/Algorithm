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
  const [start, end] = inputs[1].trim().split('*');

  function testStr(str) {
    const [front, back] = [
      str.substring(0, start.length),
      str.substring(str.length - end.length),
    ];
    // front 와 back 유효한지 확인
    if (start !== front || back !== end) return 'NE';
    // front 와 back에 중복 문자열이 있는지 체크
    if (str.length < front.length + end.lenth) return 'NE';
    return 'DA';
  }

  for (let i = 0; i < N; i++) {
    console.log(testStr(inputs[i + 2].trim()));
  }

  /////////////////////////////
  process.exit();
});

// 총 N개의 줄에 걸쳐서, 입력으로 주어진 i번째 파일 이름이 패턴과 일치하면 "DA", 일치하지 않으면 "NE"를 출력한다.
