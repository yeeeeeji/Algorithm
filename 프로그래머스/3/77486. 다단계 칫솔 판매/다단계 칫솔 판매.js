function solution(enroll, referral, seller, amount) {
    var answer = new Array(enroll.length).fill(0);
    
    var infos = new Object();
    var order = new Object();
    enroll.forEach((x, i) => {
        infos[x] = [];
        order[x] = i;
    });
    for (var i = 0; i < enroll.length; i++) {
        infos[enroll[i]].push(referral[i]);
    }
    
    for (var i = 0; i < seller.length; i++) {
        var [p, m] = [seller[i], amount[i]*100]
        while (m > 0 && p !== "-") {
            var nM = Math.floor(m*0.1);
            answer[order[p]] += m - nM;
            p = infos[p][0];
            m = nM;
        }
    }
    
    return answer;
}