function solution(food_times, k) {
    var answer = 0;
    
    var FL = food_times.length;
    var Q = Math.floor(k/FL);
    var R = k%FL;
    var L = Array.from({length:FL}, (v, i) => i);
    
    while (Q > 0) {
        L = L.filter((l) => {
            var FQ = food_times[l] - Q;
            if (FQ <= 0) {
                R -= FQ;
                food_times[l] = 0;
                return false;
            } else {
                food_times[l] = FQ;
                return true;
            }
        })
        var LL = L.length;
        if (LL == 0) return -1;
        if (LL == 1 & R == 0) return L[0]+1
        if (LL == 1) {
            if (food_times[L[0]]-R > 0) return L[0]+1;
            else return -1
        }
        
        Q = Math.floor(R/LL);
        R = R%LL;
    }
    console.log(L, R)
    if (!L.length) return -1;
    
    
    return L[R]+1
}