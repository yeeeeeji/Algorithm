function solution(gems) {
    var answer = [];
    var types = new Set(gems);
    var typesL = types.size;
    
    var infos = new Object();
    types.forEach(x => {
        infos[x] = -1;
    })
    var stack = [];
    var gcnt = 0;
    
    for (var i = 0; i < gems.length; i++) {
        var newGem = gems[i]
        if (infos[newGem] == -1) {
            gcnt += 1;
        } 
        infos[newGem] = i+1;
        if (gcnt == typesL) {
            var start = 100000;
            var g = "";
            Object.entries(infos).forEach(x => {
                if (x[1] < start) {
                    start = x[1];
                    g = x[0];
                }
            })
            if (!answer.length || answer[1]-answer[0] > i+1-start) {
                answer = [start, i+1];
            }
            gcnt = typesL-1;
            infos[g] = -1;
        }
    }
    
    return answer;
}