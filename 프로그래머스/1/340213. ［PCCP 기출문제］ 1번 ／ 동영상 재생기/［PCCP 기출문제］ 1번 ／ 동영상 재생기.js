function solution(video_len, pos, op_start, op_end, commands) {
    var video = convertTime(video_len), play = convertTime(pos);
    var opS = convertTime(op_start), opE = convertTime(op_end);
    
    if (play >= opS && play <= opE) play = opE;
    for (command of commands) {
        if (command === "prev") {
            play = play-10 > 0 ? play-10 : 0;
        } else if (command === "next") {
            play = play+10 < video ? play+10 : video;
        }
        if (play >= opS && play <= opE) play = opE;
    }
    
    var M = ""+Math.floor(play/60), S = ""+play%60;
    return (M.length===1?"0"+M:M)+":"+(S.length===1?"0"+S:S);
}

function convertTime(time) {
    var [M, S] = time.split(":").map((x) => Number(x));
    return M*60+S;
}