function solution(plans) {
    var answer = [];
    plans = plans.map((plan) => [plan[0], convertTime(plan[1]), plan[2]*1]).sort((a, b) => a[1]-b[1]);
    var now = plans[0][1], stops = [];
    
    for (var i = 0; i < plans.length-1; i++) {
        var [pres, next] = [plans[i][1]+plans[i][2], plans[i+1][1]]
        if (pres <= next) {
            answer.push(plans[i][0]);
            now = pres;
            if (pres !== next && stops.length > 0) {
                while (stops.length > 0 && now < next) {
                    var stop = stops.pop();
                    if (stop[1] <= next-now) {
                        answer.push(stop[0]);
                        now += stop[1];
                    } else {
                        stops.push([stop[0], stop[1]-(next-now)]);
                        now = next;
                    }
                }
            }  
        } else {
            var newP = [plans[i][0], pres-next];
            now = next;
            stops.push(newP);
        }
    }
    
    answer.push(plans[plans.length-1][0]);
    for (var i = stops.length-1; i >= 0; i--) {
        answer.push(stops[i][0]);
    }
    
    return answer;
}

function convertTime(time) {
    var [H, M] = time.split(":").map((x) => x*1);
    return H*60+M;
}