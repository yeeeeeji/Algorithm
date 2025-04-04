function solution(s) {
    var cC = 0;  // 이진 변환 횟수
    var rC = 0;  // 제거된 0의 개수
    var newS = s;
    
    while (newS.length > 1) {
        // x의 모든 0 제거
        newS = s.replace(/0/g, "");
        rC += s.length - newS.length;
        cC += 1;
        
        // x의 길이를 이진법으로 표현한 문자열로 바꾸기
        newS = newS.length.toString(2);
        
        s = newS;
    }
    
    return [cC, rC];
}