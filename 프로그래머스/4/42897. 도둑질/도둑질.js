function solution(money) {
    if (money.length <= 3) return Math.max(...money)
    
    var copy = money.slice(1);
    //
    for (var i = 2; i < money.length-1; i++) {
        if (i == 2) {
            money[i] += money[0]
            copy[i] += copy[0]
        } else {
            money[i] += money[i-3] > money[i-2] ? money[i-3] : money[i-2]
            copy[i] += copy[i-3] > copy[i-2] ? copy[i-3] : copy[i-2]
        }
    }
    
    return Math.max(money[money.length-2], money[money.length-3], copy[copy.length-1], copy[copy.length-2]);
}