function solution(n, t, m, timetable) {
    var bus_timetable = [];
    for (var i = n-1; i >= 0; i--) {
        var time = 540+t*i
        bus_timetable.push(time);
    }
    timetable = timetable.map((time) => {
        var [A, B] = time.split(":").map((T) => Number(T));
        return A*60+B
    }).sort((a, b) => b-a)
    
    while (bus_timetable.length > 1) {
        var time = bus_timetable.pop();
        var capacity = m;
        while (capacity > 0) {
            var crew = timetable.pop();
            if (time >= crew) {
                capacity -= 1;
            } else {
                timetable.push(crew);
                break;
            }
        }
    }
    if (timetable.length < m) return convert(bus_timetable[0]);
    return convert(Math.min(timetable[timetable.length-m]-1, bus_timetable[0]))
    
}

function convert(time) {
    var HH = Math.floor(time/60).toString();
    HH = HH.length == 1 ? "0"+HH : HH;
    var MM = (time%60).toString();
    MM = MM.length == 1 ? "0"+MM : MM;
    return HH+":"+MM
}