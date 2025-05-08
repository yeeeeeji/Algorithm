function solution(n, stations, w) {
    var answer = 0;
    stations.push(n+w+1);
    stations = [-w, ...stations]
    
    for (var i = 1; i < stations.length; i++) {
        var r = 1+2*w;
        var temp = (stations[i]-w-1)-(stations[i-1]+w);
        if (temp > 0) {
            answer += Math.ceil(temp/r);
        }
    }
    return answer;
}