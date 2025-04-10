function solution(n, words) {
    var note = new Set();
    note.add(words[0])
    
    for (var i = 1; i < words.length; i++) {
        var a = words[i-1];
        var b = words[i];
        note.add(b);
        if (a[a.length-1] != b[0] || note.size != i+1) return [(i+1)%n ? (i+1)%n : n, Math.ceil((i+1)/n)]
    }

    return [0, 0];
}