// https://programmers.co.kr/learn/courses/30/lessons/42888

function solution(record) {
  var answer = [];
  const user = {};
  for (rec of record) {
    const [command, id, nickname] = rec.split(' ');
    if (command == 'Enter' || command == 'Change') {
      user[id] = nickname;
    }
  }
  for (rec of record) {
    const [command, id, nickname] = rec.split(' ');
    if (command == 'Enter') {
      answer.push(`${user[id]}님이 들어왔습니다.`);
    } else if (command == 'Leave') {
      answer.push(`${user[id]}님이 나갔습니다.`);
    }
  }
  return answer;
}

function solution2(record) {
  const user = {};
  const action = [];
  const print = { Enter: '님이 들어왔습니다.', Leave: '님이 나갔습니다.' };
  record.forEach((rec) => {
    const [command, id, nickname] = rec.split(' ');
    // Enter, Leave
    if (command != 'Change') {
      action.push([command, id]);
    }
    // Change
    if (nickname) {
      user[id] = nickname;
    }
  });
  return action.map(([command, id]) => {
    return `${user[id]}${print[command]}`;
  });
}
