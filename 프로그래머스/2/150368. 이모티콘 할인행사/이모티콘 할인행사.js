function solution(users, emoticons) {
    var cases = [];
    const makeCases = (c) => {
        if (c.length === emoticons.length) {
            cases.push(c);
            return;
        };
        for (var i = 1; i <= 4; i++) makeCases([...c, i]);
    }
    makeCases([]);
    
    users = users.map((u) => [Math.ceil(u[0]/10), u[1]]);
    var answer = [0, 0];
    for (var c of cases) {
        var subs = 0, sales = 0;
        for (var user of users) {
            var sum = 0;
            for (var i = 0; i < emoticons.length; i++) {
                if (c[i] >= user[0]) sum += emoticons[i]*(10-c[i])/10;
            }
            if (sum >= user[1]) subs++;
            else sales += sum;
        }
        if (answer[0] < subs || (answer[0] === subs && answer[1] < sales)) answer = [subs, sales];
    }
    
    return answer;
}