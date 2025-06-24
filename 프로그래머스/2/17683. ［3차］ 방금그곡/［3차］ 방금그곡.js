function solution(m, musicinfos) {
    m = simplify(m);
    var infos = [];
    for (info of musicinfos) {
        var [start, end, title, music] = info.split(",");
        start = start.split(":").map((s) => Number(s));
        end = end.split(":").map((e) => Number(e));
        var time = (end[0]-start[0])*60 + (end[1]-start[1])
        infos.push([time, simplify(music), title]);
    }
    infos = infos.sort((a, b) => b[0]-a[0]);
    for (var [time, music, title] of infos) {
        var music_length = music.length;
        var playing = music.repeat(Math.floor(time/music_length));
        console.log(playing)
        var t = time%music_length;
        music.split("").forEach((m) => {
            if (t-- > 0) playing += m;
        })
        if (playing.indexOf(m) != -1) return title;
    }
    return "(None)";
}

function simplify(music) {
    var M = music.split("");
    M = M.map((m, i) => {
        if (m == "#") return "";
        if (i == M.length-1) return m;
        if (M[i+1] == "#") return m.toLowerCase()
        return m;
    })
    return M.join("");
}