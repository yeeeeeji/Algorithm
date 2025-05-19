function solution(sticker) {

    if (sticker.length <= 3) return Math.max(...sticker)
    
    var copy = sticker.slice(1);
    
    for (var i = 2; i < sticker.length-1; i++) {
        if (i == 2) {
            sticker[i] += sticker[0]
            copy[i] += copy[0]
        } else {
            sticker[i] += sticker[i-3] > sticker[i-2] ? sticker[i-3] : sticker[i-2]
            copy[i] += copy[i-3] > copy[i-2] ? copy[i-3] : copy[i-2]
        }
    }
    
    return Math.max(sticker[sticker.length-2], sticker[sticker.length-3], copy[copy.length-1], copy[copy.length-2]);
}