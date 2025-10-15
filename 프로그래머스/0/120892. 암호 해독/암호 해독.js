function solution(cipher, code) {
    return cipher.split("").reduce((a, c, i) => (i+1)%code ? a : a+c, "");
}