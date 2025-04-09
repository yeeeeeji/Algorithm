function solution(brown, yellow) {
    for (var i = 1; i <= yellow; i++) {
        if (yellow%i == 0) {
            if (i*2 + (yellow/i)*2 + 4 == brown) return [yellow/i+2, i+2]
        }
    }
}