function solution(n, arr1, arr2) {
    arr1 = arr1.map((a) => convertBin(a.toString(2), n));
    return arr2.map((x, i) => {
        return convertBin(x.toString(2), n).split("").reduce((a, c, j) => {
            if (arr1[i][j] == 0 && c == 0) return a+" ";
            return a+"#"
        }, "")
    })
}

function convertBin(bin, n) {
    if (bin.length < n) return "0".repeat(n-bin.length)+bin;
    return bin;
}