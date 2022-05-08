
# https://programmers.co.kr/learn/courses/30/lessons/92334

def solution(id_list, report, k):
    report_dict = {}
    for rep in report:
        reporter_id, reported_id = rep.split()
        # reporter의 dictionary가 처음이라면 list 생성해서 item 추가한다. 
        if reporter_id not in report_dict.keys():
            report_dict[reporter_id] = [reported_id]
        else : 
            # 중복 제거
            if reported_id not in report_dict[reporter_id]:
                report_dict[reporter_id].append(reported_id)
    reported_count= {}
    answer = [0]* len(id_list)
    for id in id_list:
        count = 0 
        for values in report_dict.values():
            if id in values : count +=1
        reported_count[id] = count
    for reporter in report_dict.keys():
        for prob in report_dict[reporter]:
            if reported_count[prob] >= k :
                answer[id_list.index(reporter)] += 1
    return answer

def good_solution(id_list, report, k):
    # 유저 명수 만큼 길이의 answer 배열 생성  
    answer = [0]*len(id_list)
    # 유저마다 모두 0을 갖는 딕셔너리 생성
    reports = {x:0 for x in id_list}
    # set(report)으로 중복 제거 -> 유저가 report 당한만큼 reports 딕셔너리 값으로 넣어준다. {유저: 신고당한횟수 }
    for r in set(report):
        reports[r.split()[1]] += 1
    # 유저가 신고당한 횟수가 k를 넘는다면 신고자를 찾아서 answer에 1추가해준다. 
    for r in set(report):
        if reports[r.split()[1]] >= k:
            answer[id_list.index(r.split()[0])] += 1
    return answer