function solution(user_id, banned_id) {
  const used = new Array(user_id.length).fill(false);
  let count = 0;

  function dfs(idx, k) {
    if (idx == banned_id.length) {
      count++;
      return;
    }
    for (let i = 0; i < user_id.length; i++) {
      if (!used[i] && isBannedId(user_id[i], banned_id[idx])) {
        used[i] = true;
        dfs(idx + 1, i + 1);
        used[i] = false;
      }
    }
  }
  dfs(0, 0);

  // 중복 제거
  const banned_set = Array.from(new Set(banned_id));
  banned_set.forEach((b) => {
    count = count / banned_id.filter((i) => i == b).length;
  });

  return count;
}

function isBannedId(uid, bid) {
  if (uid.length != bid.length) {
    return false;
  }
  for (let i = 0; i < uid.length; i++) {
    if (bid[i] == '*') continue;
    if (bid[i] != uid[i]) return false;
  }
  return true;
}
