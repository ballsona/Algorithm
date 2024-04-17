function makeDictionary(str) {
  const dict = {};

  for (let i = 0; i < str.length - 1; i++) {
    const w = str.slice(i, i + 2).toLowerCase();
    // 영문자 쌍만 유효
    const [c1, c2] = [w[0].charCodeAt(), w[1].charCodeAt()];
    if (c1 < 97 || c1 > 122 || c2 < 97 || c2 > 122) continue;
    // dict에 추가
    if (w in dict) {
      dict[w] += 1;
    } else {
      dict[w] = 1;
    }
  }
  return dict;
}

function solution(str1, str2) {
  // 문자열을 두조각씩 쪼개서 객체 생성
  const dict1 = makeDictionary(str1);
  const dict2 = makeDictionary(str2);

  let [j1, j2] = [0, 0]; // 교집합과 합집합
  const words = new Set([...Object.keys(dict1), ...Object.keys(dict2)]);
  Array.from(words).forEach((word) => {
    const [c1, c2] = [dict1[word] ?? 0, dict2[word] ?? 0];
    j1 += Math.min(c1, c2);
    j2 += Math.max(c1, c2);
  });
  if (j1 == 0 && j2 == 0) return 65536;
  return Math.floor((j1 / j2) * 65536);
}
