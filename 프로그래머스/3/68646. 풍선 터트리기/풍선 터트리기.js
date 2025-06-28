function solution(a) {
    if (a.length <= 3) return a.length;
    var answer = 1;  // 가장 작은 숫자
    var min = [1000001, -1];
    a.forEach((x, i) => {
        if (min[0] > x) min = [x, i];
    })
    var L = a.slice(0, min[1]);
    var LL = L.length;
    if (LL > 0) {
        var LV = Array(L.length).fill(false);
        var LI = 0;
        var LO = new Map();
        L.sort((a, b) => a-b).forEach((l, i) => {
            LO.set(l, i);
        })
        for (var i = min[1]-1; i >= 0; i--) {
            if (LI == LL) break;
            LV[LO.get(a[i])] = true;
            if (LI == LO.get(a[i])) {
                answer += 1;
                while (LI < LL && LV[LI] == true) {
                    LI += 1;
                }
            }
        }
    }
    
    var R = a.slice(min[1]+1, a.length).reverse();
    var RL = R.length;
    if (RL > 0) {
        var RV = Array(R.length).fill(false);
        var RI = 0;
        var RO = new Map();
        R.sort((a, b) => a-b).forEach((r, i) => {
            RO.set(r, i);
        })
        for (var i = min[1]+1; i < a.length; i++) {
            if (RI == RL) break;
            RV[RO.get(a[i])] = true;
            if (RI == RO.get(a[i])) {
                answer += 1;
                while (RI < RL && RV[RI] == true) {
                    RI += 1;
                }
            }
        }
        
    }
    return answer;
}