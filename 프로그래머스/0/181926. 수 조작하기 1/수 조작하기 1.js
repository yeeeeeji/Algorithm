function solution(n, control) {
    return control.split("").reduce((a, c) => {
        if (c === "w") return a+1;
        if (c === "s") return a-1;
        if (c === "d") return a+10;
        return a-10;
    }, n);
}