function solution(array, commands) {
  var answer = [];
  commands.forEach((c) => {
    const [i, j, k] = [c[0], c[1], c[2]];
    const newArr = array.slice(i - 1, j).sort((a, b) => a - b);
    answer.push(newArr[k - 1]);
  });

  return answer;
}

// 배열.slice(i-1,j) 해서 k번째 수 구하기
