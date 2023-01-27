function solution(food) {
  let answer = '';
  let lst = '';
  [...food].map((f, idx) => {
    // for(let i=0;i<parseInt(f/2);i++) lst += idx;
    lst += idx === 0 ? '' : `${idx}`.repeat(parseInt(f / 2));
  });
  answer += lst + '0' + lst.split('').reverse().join('');
  return answer;
}
