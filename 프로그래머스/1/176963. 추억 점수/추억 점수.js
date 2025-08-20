function solution(name, yearning, photo) {
    var scores = {};
    name.forEach((n, i) => {scores[n] = yearning[i];});
    return photo.map((p) => p.reduce((a, c) => a+(scores[c] ?? 0), 0));
}