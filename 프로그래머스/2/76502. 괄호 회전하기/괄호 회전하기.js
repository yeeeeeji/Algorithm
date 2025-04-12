function solution(s) {
    
    if (s.length%2) return 0; // 홀수이면 무조건 실패
    
    var newS = s + s;
    var sL = s.length;
    var st = [];
    
    for (var i = 0; i < sL; i++) {
        var open = 0;
        var u = 0
        for (var j = 0; j < sL; j++) {
            var v = newS[i+j];
            
            if (v == "(" || v == "{" || v == "[") {
                open += 1;
                st.push(v);
            } else {
                var p = st.pop()+v;
                if (p == "()" || p == "{}" || p == "[]") {
                    open -= 1
                    if (open == 0) u += 1;
                } else {
                    open = 0;
                    u = 0;
                    break;
                }
            }
        }
        
        if (open == 0 && u > 0) {
            return u;
        } else {
            u = 0
        }
    }
    
    return 0;
}