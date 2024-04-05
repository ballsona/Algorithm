const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const inputs = require('fs').readFileSync(filePath).toString().trim().split('\n');

let [N, M, x, y, C] = inputs[0].split(' ').map(Number);
const Map = inputs.slice(1, N + 1).map((s) => s.split(' ').map(Number));
const Commands = inputs[N + 1].split(' ').map(Number);

console.log(solution());

/////////////////////////////

function solution() {
  let dice = new Array(4).fill().map((_) => new Array(3).fill(0));
  const dx = [0, 0, -1, 1];
  const dy = [1, -1, 0, 0];
  const results = [];

  for (let i = 0; i < C; i++) {
    // 명령어에 따라 이동
    const c = Commands[i];
    const [nx, ny] = [x + dx[c - 1], y + dy[c - 1]];

    // 범위 벗어난다면 스킵
    if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
    x = nx;
    y = ny;

    // 남
    if (c == 3) {
      [dice[1][1], dice[2][1], dice[3][1], dice[0][1]] = [
        dice[0][1],
        dice[1][1],
        dice[2][1],
        dice[3][1],
      ];
    }
    // 북
    else if (c == 4) {
      [dice[0][1], dice[1][1], dice[2][1], dice[3][1]] = [
        dice[1][1],
        dice[2][1],
        dice[3][1],
        dice[0][1],
      ];
    }
    // 동
    else if (c == 1) {
      [dice[3][1], dice[1][1], dice[1][2], dice[1][0]] = [
        dice[1][0],
        dice[1][2],
        dice[3][1],
        dice[1][1],
      ];
    }
    // 서
    else if (c == 2) {
      [dice[1][0], dice[1][1], dice[1][2], dice[3][1]] = [
        dice[3][1],
        dice[1][0],
        dice[1][1],
        dice[1][2],
      ];
    }

    // 주사위 밑면과 칸 값 변경
    if (Map[nx][ny] == 0) {
      Map[nx][ny] = dice[1][1];
    } else {
      dice[1][1] = Map[nx][ny];
      Map[nx][ny] = 0;
    }

    // 주사위 윗면 저장
    results.push(dice[3][1]);
  }
  return results.join('\n');
}

// 동 1 서 2 북 3 남 4 으로 이동 시: 범위 안벗어났다면 -> 주사위 전개도 변경 -> 주사위 밑면 + 칸 값 바꾸고 -> 주사위 윗면 출력
