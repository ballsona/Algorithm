// 스택/큐
function solution(s) {
  var res = 0;
  const arr = s.split('');
  for (let s of arr) {
    res += s === ')' ? -1 : 1;
    if (res < 0) return false;
  }
  return res === 0;
}
// 주어진 문자열이 올바른 괄호인지 테스트 후 반환.
// ( 가 나오면 +1 하고 ) 가 나오면 -1 한다.

// ) 가 먼저 나오면 안되니까 음수가 되는순간 break
// 마지막 값이 0이면 true

// split('') 하면 효율 에러 뜨고 split("") 하면 통과함...
