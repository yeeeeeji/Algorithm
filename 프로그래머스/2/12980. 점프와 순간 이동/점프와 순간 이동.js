function solution(n)
{
    var ans = 1;

    while (n > 1) {
        if (n%2) {
            ans += 1;
            n = (n-1)/2
        } else {
            n /= 2
        }
    }

    return ans;
}