function solution(n, lost, reserve) {
    var students = new Array(n+1);
    reserve.forEach((r) => { students[r] = true });
    lost.forEach((l) => { students[l] = undefined });
    lost = lost.filter((l) => !reserve.includes(l))
    lost = lost.sort((a, b)=>a-b)
    var answer = n - lost.length;
    for (x of lost) {
        if (x > 1 && students[x-1]) {
            answer += 1;
            students[x-1] = undefined;
        } else if (x < n && students[x+1]) {
            answer += 1;
            students[x+1] = undefined;
        }
        
    }
    return answer;
}