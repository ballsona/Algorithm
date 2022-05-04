
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