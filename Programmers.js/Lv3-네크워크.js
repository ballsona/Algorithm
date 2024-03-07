function solution(n, comps) {
  const visited = new Array(n).fill(false);
  let count = 0;

  function dfs(node) {
    if (visited[node]) return;

    let stack = [node];
    visited[node] = true;
    count++;

    while (stack.length > 0) {
      const t = stack.pop();
      for (let i = 0; i < n; i++) {
        if (i !== t && comps[t][i] == 1 && !visited[i]) {
          stack.push(i);
          visited[i] = true;
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    dfs(i);
  }
  return count;
}
