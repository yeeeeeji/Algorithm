function solution(schedules, timelogs, startday) {
    var answer = 0;
    var weekdays = Array.from({length: 7}, (_, i) => i).filter((w) => w !== 6-startday && w !== 7-startday);
    schedules.forEach((schedule, i) => {
        var limit = convertTime(schedule);
        for (w of weekdays) {
            if (timelogs[i][w] > limit) break;
            if (w === weekdays[4]) answer += 1;
        }
    })
    return answer;
}

function convertTime(n) {
    return n%100+10 >= 60 ? n+50 : n+10; 
}