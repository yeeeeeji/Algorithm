function solution(s)
{   
    if (s.length%2) return 0;
    
    var sA = [];
    
    for (x of s) {
        if (sA == null) sA.push(x);
        
        if (sA[sA.length-1] == x) {
            sA.pop();
        } else {
            sA.push(x);
        }
    }
    
    if (sA.length > 0) {
        return 0;
    } else {
        return 1;
    }
}