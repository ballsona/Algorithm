// programmers.co.kr/learn/courses/30/lessons/76501?language=javascript

function solution(absolutes, signs) {
  let answer = 0;
  //   for (i = 0; i < absolutes.length; i++) {
  //     answer += signs[i] ? absolutes[i] : -absolutes[i];
  //   }
  absolutes.forEach((abs, i) => {
    answer += signs[i] ? abs : -abs;
  });
  return answer;
}
