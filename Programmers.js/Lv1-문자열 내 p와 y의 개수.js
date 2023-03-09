-function solution(s) {
  var counts = { p: 0, y: 0 };
  s.toLowerCase()
    .split('')
    .forEach((w) => {
      if (w === 'p') counts.p += 1;
      else if (w === 'y') counts.y += 1;
    });
  return counts.p === counts.y;
};

//  s.toLowerCase().split('p').length === s.toLowerCase().split('y').length
// s.match(/p/ig).length === s.match(/y/ig).length
