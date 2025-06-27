function solution(want, number, discount) {
    var answer = 0;
    var N = number.join("");
    var index = new Map();
    want.forEach((w, i) => index.set(w, i));
    var infos = new Array(want.length).fill(0);
    for (var i = 0; i < 10; i++) {
        if (index.get(discount[i]) != undefined) {
            infos[index.get(discount[i])] += 1;
        }
    }
    if (number.join("") == infos.join("")) answer += 1;
    
    for (var i = 10; i < discount.length; i++) {
        if (index.get(discount[i]) != undefined) {
            infos[index.get(discount[i])] += 1;
        }
        if (index.get(discount[i-10]) != undefined) {
            infos[index.get(discount[i-10])] -= 1;
        }
        if (N == infos.join("")) answer += 1;
    }
    return answer;
}