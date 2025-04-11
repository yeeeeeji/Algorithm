function solution(n,a,b)
{
    var answer = 1;

    while (a*b > 0) {
        if (Math.abs(a-b) == 1 && Math.floor((a+b)/2)%2) return answer
        
        answer++
        
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
    }

    return answer;
}