function solution(p) {
    if (p === "") return "";
    
    var [u, v] = seperate(p);
    if (isRight(u)) return u+solution(v);
    else return `(${solution(v)})${reverseU(u)}`

}

function seperate(p) {
    var u = "", v = "";
    var count = 0;
    for (var i = 0; i < p.length; i++) {
        if (i > 0 && count == 0) {
            v += p[i];
        } else {
            if (p[i] == "(") count += 1;
            else count -= 1;
            u += p[i];
        }
    }
    
    return [u, v]
}

function isRight(p) {
    var count = 0;
    for (x of p) {
        if (x == "(") count += 1;
        else count -= 1;
        if (count < 0) return false;
    }
    return true;
}

function reverseU(p) {
    return p.split("").map((x, i) => {
        if (i === 0 || i === p.length-1) return "";
        if (x === "(") return ")";
        else return "(";
    }).join("");
}