function solution(stones, k) {
    var [min, max] = [1, 200000000];
    
    while (min <= max) {
        var mid = Math.floor((min+max)/2);
        
        var flag = false;
        var cnt = 0;
        for (s of stones) {
            s-mid <= 0 ? cnt += 1 : cnt = 0;
            
            if (cnt == k) {
                flag = true;
                break;
            }
        }
        flag ? max = mid-1 : min = mid+1;
    }
    return min;
}