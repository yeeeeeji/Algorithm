function solution(files) {
    var answer = [];
    var infos = [];
    
    for (file of files) {
        var H = true;
        var info = [file];
        var temp = "";
        for (f of file+"*"){
            if (H) {
                if (f === ' ' || isNaN(f)) {
                    temp += f;
                } else {
                    H = false;
                    info.push(temp.toUpperCase());
                    temp = f;
                }
                continue;
            }
            if (isNaN(f) || temp.length == 5) {
                info.push(parseInt(temp));
                break;
            } else {
                temp += f;
            }
        }
        infos.push(info);
    }
    
    infos.sort((a, b) => {
        if (a[1] > b[1]) return 1;
        if (a[1] < b[1]) return -1;
        else return a[2] - b[2]
    })
    
    return infos.map((i) => i[0]);
}