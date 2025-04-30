function solution(fees, records) {
    var answer = [];
    var I = new Object();
    var F = new Object();
    
    for (r of records) {
        var [t, num, status] = r.split(" ");
        if (status == "IN") {
            if (Object.hasOwn(I, num)) I[num][0].push(t);                
            else I[num] = [[t], []];  
        } else {
            I[num][1].push(t);
        }
        
    }
    for (i in I) {
        if (I[i][0].length!=I[i][1].length) I[i][1].push("23:59");
        
        var T = 0;
        for (var x = 0; x < I[i][0].length; x++) {
            T += time(I[i][0][x], I[i][1][x]);
        }
        
        F[i] = fee(fees, T);
    }
    answer = Object.entries(F).sort((a, b) => parseInt(a[0]) - parseInt(b[0])).map((x) => x[1])
    return answer;
}

function fee(fees, time) {
    if (time <= fees[0]) {
        return fees[1];
    } else {
        return fees[1] + Math.ceil((time-fees[0])/fees[2])*fees[3]
    }
}

function time(inTime, outTime) {
    var [inH, inM] = inTime.split(":").map((x)=>parseInt(x));
    var [outH, outM] = outTime.split(":").map((x)=>parseInt(x));
    return (outH-inH)*60+(outM-inM);
}