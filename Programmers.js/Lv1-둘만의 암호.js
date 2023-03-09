function solution(s, skip, index) {
  var answer = '';
  //  var alphabets = [
  //    'a',
  //    'b',
  //    'c',
  //    'd',
  //    'e',
  //    'f',
  //    'g',
  //    'h',
  //    'i',
  //    'j',
  //    'k',
  //    'l',
  //    'm',
  //    'n',
  //    'o',
  //    'p',
  //    'q',
  //    'r',
  //    's',
  //    't',
  //    'u',
  //    'v',
  //    'w',
  //    'x',
  //    'y',
  //    'z',
  //  ];
  var alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');

  var skips = skip.split('');
  skips.forEach((s) => {
    const idx = alphabets.indexOf(s);
    if (idx !== -1) {
      alphabets.splice(idx, 1);
    }
  });
  var newStr = s.split('').map((w) => {
    const c = alphabets.indexOf(w) + index;
    if (c >= alphabets.length) {
      // 한바퀴 이상을 돌 수 있으니 길이를 빼는게 아니라 나눈 나머지를 구하도록 한다.
      return alphabets[c % alphabets.length];
    } else {
      return alphabets[c];
    }
  });
  answer = newStr.join('');
  return answer;
}
