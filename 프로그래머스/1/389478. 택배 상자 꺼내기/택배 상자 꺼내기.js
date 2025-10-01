function solution(n, w, num) {
    var answer = Math.floor(n/w) - (Math.ceil(num/w) - 1);
    if (n%w === 0) return answer;

    var numP = Math.ceil(num/w)%2 ? (num-1)%w+1 : w-(num-1)%w;
    var lastP = Math.ceil(n/w)%2 ? (n-1)%w+1 : w-(n-1)%w;

    if (Math.ceil(n/w)%2) {
        if (numP <= lastP) answer++;
    } else {
        if (numP >= lastP) answer++;
    }
    return answer;
}