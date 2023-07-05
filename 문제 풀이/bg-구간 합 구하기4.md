# 구간 합 구하기

### 문제

https://www.acmicpc.net/problem/11659

### 풀이 

주어진 배열에서 특정 구간을 누적하여 더한 후 그 값을 반환하면 되는 문제이다. 배열과 구간 값들이 입력 값으로 주어진다.

문제 해결은 어렵지 않았는데, 시간 초과를 해결하느라 오래 걸려서 관련해서 풀이해보고자 한다. 

#### 시행 착오 1 

처음에는 그냥 무작정 주어진 배열을 돌면서 s번째 값부터 e번째 값까지를 더해서 구했다. 그랬더니 당연히 시간 초과가 발생함..

```js
  // M번 누적합 구하기
  for (let i = 2; i < C + 2; i++) {
    // 시작 및 종료 인덱스
    const [s, e] = inputs[i].split(' ').map((s) => parseInt(s) - 1);
    // 주어진 범위에서 누적합 구하기
    const sum = nums.reduce((s, currVal, currIdx) => {
      if (currIdx < s || currIdx > e) {
        return s;
      } else {
        return s + currVal;
      }
    }, 0);
    console.log(sum);
  }
```

그래서 배열을 따로 생성 후 배열의 누적합을 저장했다. 즉 예를 들어 배열이 [1,3,5] 라면 누적합 배열은 [1,4,9]가 되는 것이다. 

이후 이 누적합 배열의 e번째 값에서 s-1번째 값을 빼주면 더 빠르게 문제를 해결할 수 있었다.

#### 시행 착오 2

```js
const nums = inputs[1].split(' ').map(Number);
const sums = new Array(nums.length + 1).fill(0);

// 누적합 만들기 
nums.forEach((n, i) => {
  sums[i + 1] = n + sums[i];
});

// 누적합에서 결과값 구하기 
inputs.slice(2).forEach((range) => {
  const [s, e] = range.split(' ').map(Number);
  console.log(sums[e] - sums[s - 1]);
});
```

분명 제대로 동작할 것 같은데 자꾸 시간초과가 나서 혼자 여러 시도를 해보다가 결국 다른 풀이를 참고하고 나서야 문제를 알았다.

내 풀이는 주어진 구간 개수만큼 계속 console을 찍고 있는 반면, 다른 풀이에서는 output이라는 배열을 하나 만들고, 그 배열에 값을 저장해둔 후 풀이 마지막에 output을 한번 출력하고 있었다. 

console을 몇번 찍는지는 시간 초과에 영향이 없을 줄 알았는데, 앞으로는 주의해야겠다 ..

### Final

```js
const nums = inputs[1].split(' ').map(Number);
const sums = new Array(nums.length + 1).fill(0);
const	result = [];

// 누적합 만들기 
nums.forEach((n, i) => {
  sums[i + 1] = n + sums[i];
});

// 누적합에서 결과값 구하기 
inputs.slice(2).forEach((range) => {
  const [s, e] = range.split(' ').map(Number);
  result.push(sums[e] - sums[s - 1]);
});

console.log(result.join('\n'));
```



