function solution(diffs, times, limit) {
    var [l, r] = [1, 0], answer = 0;
    diffs.forEach((d) => {
        if (d > r) r = d;
    })
    while (l <= r) {
        var level = Math.floor((l+r)/2), time_sum = 0;
        for (var i = 0; i < diffs.length; i++) {
            var [diff, time_cur, time_prev] = [diffs[i], times[i], i === 0 ? 0 : times[i-1]];
            if (diff <= level) {
                time_sum += time_cur;
            } else {
                time_sum += (diff-level)*(time_cur+time_prev)+time_cur;
            }
            if (time_sum > limit) break;

        }
        if (time_sum > limit) {
            l = level+1;
        } else {
            r = level-1;
            answer = level;
        }
    }
    return answer;
}