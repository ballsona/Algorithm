function solution(clothes) {
  var c = {};
  clothes.forEach((cloth) => {
    c = { ...c, [cloth[1]]: (c[cloth[1]] | 0) + 1 }; // {종류: 종류에 해당하는 의상 개수}
  });
  return Object.values(c).reduce((a, b) => a * (b + 1), 1) - 1;
}

// 매일 다른 옷 조합.
// [의상이름, 의상종류]
// {의상 종류: [의상 이름들 배열]} 로 일단 묶는다.
// {h:[y,g], e:[b]} -> (각 개수+1)의 총 곱 -1 (모두 0일 경우를 제외하기 위해)
