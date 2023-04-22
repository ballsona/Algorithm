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

  const c = parseInt(inputs[0]);

  for (let i = 1; i <= c; i++) {
    const arr = inputs[i].split('');
    let stack = [];
    let temp = [];

    arr.forEach((s) => {
      if (s === '<') {
        // stack 마지막 값 꺼내고 temp에 넣기
        if (stack.length > 0) {
          temp.push(stack.pop());
        }
      } else if (s === '>') {
        // temp에서 꺼내서 stack에 넣기
        if (temp.length > 0) {
          stack.push(temp.pop());
        }
      } else if (s === '-') {
        if (stack.length > 0) {
          stack.pop();
        }
      } else {
        // 문자 넣기
        stack.push(s);
      }
    });

    if (temp.length > 0) {
      stack.push(...temp.reverse());
    }

    console.log(stack.join(''));
  }

  /////////////////////////////
  process.exit();
});
