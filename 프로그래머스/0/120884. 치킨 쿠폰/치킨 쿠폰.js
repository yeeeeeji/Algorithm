function solution(chicken) {
    var service = chicken;
    var coupon = 0;
    var answer = 0;
    while (service >= 10) {
        coupon = service%10;
        service = Math.floor(service/10);
        answer += service;
        service += coupon;
    }
    return answer;
}