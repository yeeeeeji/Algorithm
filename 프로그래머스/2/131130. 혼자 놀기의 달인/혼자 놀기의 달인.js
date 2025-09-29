function solution(cards) {
    var answer = 0;
    var set = [], visited = Array(cards.length).fill(false);
    cards = cards.map((c) => c-1)
    for (var i = 0; i < cards.length; i++) {
        if (!visited[cards[i]]) {
            var idx = cards[i], count = 0, comb = [];
            while (!visited[cards[idx]]) {
                idx = cards[idx], visited[idx] = true, count++;
            }
            visited[cards[i]] = true;
            set.push(count)
        }
    }
    if (set.length === 1) return 0;
    set.sort((a, b) => b-a);
    return set[0]*set[1];
}