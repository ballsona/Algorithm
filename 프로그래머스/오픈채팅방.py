# https://programmers.co.kr/learn/courses/30/lessons/42888

def solution(record):
    user = {}
    result = []
    for rec in record:
        command = rec.split(' ')
        if command[0] == 'Enter':
            user[command[1]] = command[2]
        elif command[0] == 'Change':
            user[command[1]] =command[2]

    for rec in record:
        command = rec.split(' ')
        if command[0] == 'Enter':
            result.append(user[command[1]]+'님이 들어왔습니다.')
        elif command[0] == 'Leave':
            result.append(user[command[1]]+'님이 나갔습니다.')
        else :
            continue
    return result

def solution2(record):
    user = {}
    result = []
    print = {'Enter':'님이 들어왔습니다.', 'Leave':'님이 나갔습니다.'}
    for rec in record:
        command = rec.split()
        if command[0] in ['Enter','Change']:
            user[command[1]] =command[2]

    for rec in record:
        command = rec.split()
        if command[0] == 'Enter':
            result.append(user[command[1]]+'님이 들어왔습니다.')
        elif command[0] == 'Leave':
            result.append(user[command[1]]+'님이 나갔습니다.')
    return result