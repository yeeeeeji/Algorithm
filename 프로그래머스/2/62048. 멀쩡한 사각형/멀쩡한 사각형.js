function solution(w, h) {
    if (w === h) return w*h-w
    var answer = w*h;
    var [a, b] = [0, 0];
    for (var i = 1; i <= w; i++) {
        a = Math.floor(h*(i-1)/w);
        b = Math.ceil(h*i/w);
        answer -= b-a;
    }
    return answer;
}