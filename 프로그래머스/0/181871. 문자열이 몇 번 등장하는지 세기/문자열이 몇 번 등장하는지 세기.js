function solution(myString, pat) {
    var answer = 0;
    for (var i = 0; i <= myString.length-pat.length; i++) {
        if (pat === myString.slice(i, i+pat.length)) answer++
    }
    return answer;
}