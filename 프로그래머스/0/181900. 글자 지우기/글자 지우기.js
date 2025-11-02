function solution(my_string, indices) {
    return [...my_string].filter((x, i) => !indices.includes(i)).join("");
}