// DFS
function solution(numbers, target) {
  let answer = 0;

  function dfs(idx, sum) {
    if (idx === numbers.length - 1) {
      if (sum === target) answer++;
      return;
    } else {
      dfs(idx + 1, sum + numbers[idx + 1]);
      dfs(idx + 1, sum - numbers[idx + 1]);
    }
  }

  dfs(0, +numbers[0]);
  dfs(0, -numbers[0]);

  return answer;
}

// BFS
function solution(numbers, target) {
  let Queue = [];
  Queue.push([+numbers[0], -numbers[0]]);

  for (let i = 1; i < numbers.length; i++) {
    let newArr = [];
    Queue[0].forEach((n) => {
      newArr.push(n + numbers[i]);
      newArr.push(n - numbers[i]);
    });
    Queue.push(newArr);
    Queue.shift();
    console.log(Queue);
  }

  return Queue[0].filter((n) => n === target).length;
}

solution([1, 1, 1, 1, 1], 3);
