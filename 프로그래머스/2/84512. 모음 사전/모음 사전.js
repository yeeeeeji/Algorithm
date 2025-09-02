function solution(word) {
    var count = 0, answer;
    var alps = ["A", "E", "I", "O", "U"];
    var flag = false;
    var dfs = (cur) => {
        if (cur === word) {
            flag = true;
            answer = count;
        }
        if (flag || cur.length === 5) return;
        for (var i = 0; i < 5; i++) {
            count++;
            dfs(cur+alps[i]);
        }
    }
    
    dfs("");
    
    return answer;
}