function solution(genres, plays) {
  var answer = [];

  var g = {};
  var nums = {};

  // 각 장르의 총 재생수를 담은 g 객체와 각 장르를 갖는 고유번호 배열을 담은 nums 객체를 생성한다.
  genres.forEach((n, i) => {
    g = { ...g, [n]: (g[n] | 0) + plays[i] };
    nums = { ...nums, [n]: nums[n] ? [...nums[n], i] : [i] };
  });

  // 장르 이름과 장르 총 재생수를 추출
  var [gname, gcount] = [Object.keys(g), Object.values(g)];

  // 재생수를 내림 차순으로 정렬
  // 재생수가 큰 순으로 반복문을 돌면서 특정 장르의 고유번호 배열을 재생수 기준으로 내림차순 정렬
  // 해당 배열에서 요소 2개 추출
  gcount
    .sort((a, b) => b - a)
    .forEach((c) => {
      gn = gname.find((n) => g[n] === c);
      nums[gn].sort((a, b) => plays[b] - plays[a]);
      answer = [...answer, ...nums[gn].slice(0, 2)];
    });

  return answer;
}

// 장르별로 2개씩 노래 뽑아서 앨범 출시 예정.
// 속한 노래가 많이 재생된 장르 > 장르 내에서 많이 재생된 노래 > 고유 번호가 낮은 노래
// {장르: 장르 횟수} -> 미리 장르 순서 결정
// 순서 내에서 반복문 -> {해당 장르 :  [재생순 고유번호] } -> 노래 2개 추출

// 좋은 풀이는 아닌 것 같다...
