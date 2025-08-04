function solution(book_time) {
    var answer = 0;
    var hotel = [];
    book_time = book_time.map(([start, end]) => {
        var [sH, sM] = start.split(":").map((s) => Number(s));
        var [eH, eM] = end.split(":").map((e) => Number(e));
        return [sH*60+sM, eH*60+eM]
    }).sort((a, b) => {
        if (a[0] == b[0]) {
            return a[1] - b[1]
        }
        return a[0] - b[0];
    })
    hotel.push(book_time[0][1]+9);
    for (var i = 1; i < book_time.length; i++) {
        var [start, end] = book_time[i]
        for (var j = 0; j < hotel.length; j++) {
            var room = hotel[j];
            if (start > room) {
                hotel[j] = end+9;
                break;
            }
            if (j == hotel.length-1) {
                hotel.push(end+9);
                break
            }
        }
        hotel.sort((a, b) => a-b);
    }
    return hotel.length;
}