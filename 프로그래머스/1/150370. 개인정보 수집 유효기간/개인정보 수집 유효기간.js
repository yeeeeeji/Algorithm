function solution(today, terms, privacies) {
    today = getDates(...today.split("."));
    
    var infos = {};
    terms.forEach((t) => {
        var [type, term] = t.split(" ");
        infos[type] = Number(term)*28;
    })
    
    var answer = [];
    privacies.forEach((privacy, i) => {
        var [dates, type] = privacy.split(" ");
        dates = getDates(...dates.split("."));
        if (today >= dates+infos[type]) answer.push(i+1);
    });
    return answer;
}

function getDates(y, m, d) {
    return Number(y)*12*28 + Number(m)*28 + Number(d);
}