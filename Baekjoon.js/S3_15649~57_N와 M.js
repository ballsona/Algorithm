const fs = require('fs');
const inputs = fs.readFileSync('input.txt').toString().split('\n');

const [N, M] = inputs[0].split(' ').map(Number);
const arr = [];
const result = [];

solution4(1);
console.log(result.join('\n'));

// #15649: 1부터 n까지 자연수 중에서 중복 없이 m개를 고른 수열
function solution1(n) {
  if (arr.length >= M) {
    console.log(arr.join(' '));
    return;
  }
  for (let i = 1; i <= N; i++) {
    if (!arr.includes(i)) {
      arr.push(i);
      solution1(n + 1);
      arr.pop(i);
    }
  }
}

// #15650: 1부터 n까지 자연수 중에서 중복 없이 m개를 고른 수열 + 오름차순 수열만
function solution2(n) {
  if (arr.length >= M) {
    console.log(arr.join(' '));
    return;
  }
  for (let i = 1; i <= N; i++) {
    // 현재 배열에 나보다 작은 숫자만 있어야함.
    if (arr.every((n) => n < i)) {
      arr.push(i);
      solution2(n + 1);
      arr.pop(i);
    }
  }
}

// #15651: 1부터 n까지 자연수 중에서 중복 가능해서 m개를 고른 수열
function solution3(n) {
  if (arr.length >= M) {
    result.push(arr.join(' '));
    return;
  }
  for (let i = 1; i <= N; i++) {
    arr.push(i);
    solution3(n + 1);
    arr.pop(i);
  }
}

// #15652: 1부터 n까지 자연수 중에서 중복 가능해서 m개를 고른 수열 + 비내림차순 수열만
function solution4(n) {
  if (arr.length >= M) {
    result.push(arr.join(' '));
    return;
  }
  for (let i = 1; i <= N; i++) {
    if (arr.every((n) => n <= i)) {
      arr.push(i);
      solution4(n + 1);
      arr.pop(i);
    }
  }
}
