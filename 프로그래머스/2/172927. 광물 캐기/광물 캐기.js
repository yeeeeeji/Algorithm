function solution(picks, minerals) {
    var answer = 0;
    var infos = {"diamond": 0, "iron": 1, "stone": 2};
    var newM = []
    var pickS = picks.reduce((a, c) => a+c*5, 0)
    if (minerals.length > pickS) minerals = minerals.slice(0, pickS);
    for (var i = 0; i < minerals.length; i += 5) {
        var m = [0, 0, 0];
        for (var j = i; j < i+5; j++) {
            if (j >= minerals.length) break;
            m[infos[minerals[j]]] += 1;
        }
        newM.push(m)
    }
    newM.sort((a, b) => {
        if (a[0] === b[0]) return a[1]-b[1];
        return a[0]-b[0]
    })
    for (var i = 0; i < 3; i++) {
        for (var j = 1; j <= picks[i]; j++) {
            if (newM.length === 0) return answer;
            var m = newM.pop();
            if (i === 0) {
                answer += m[0]+m[1]+m[2];
            } else if (i === 1) {
                answer += 5*m[0]+m[1]+m[2];
            } else {
                answer += 25*m[0]+5*m[1]+m[2];
            }
        }
    }
    return answer;
}