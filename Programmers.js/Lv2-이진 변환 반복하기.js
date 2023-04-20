function solution(s) {
  let count = 0;
  let step = 0;

  s = s.split('').map((s) => parseInt(s));

  while (!(s.length === 1 && s[0] === 1)) {
    // 0 제거
    count += s.filter((s) => s === 0).length;
    s = s.filter((s) => s === 1);

    // x길이 2진법으로 표현한 문자열
    let len = s.length;
    s = len
      .toString(2)
      .split('')
      .map((s) => parseInt(s));
    step += 1;
  }

  return [step, count];
}
