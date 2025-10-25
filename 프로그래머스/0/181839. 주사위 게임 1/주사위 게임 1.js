function solution(a, b) {
    return (a%2 && b%2) ? a**2+b**2 : (!(a%2) && !(b%2)) ? Math.abs(a-b) : 2*(a+b);
}