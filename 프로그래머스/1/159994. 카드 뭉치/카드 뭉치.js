function solution(cards1, cards2, goal) {
    cards1 = cards1.reverse(), cards2 = cards2.reverse();
    var word1 = cards1.pop(), word2 = cards2.pop();
    for (g of goal) {
        if (g == word1) {
            word1 = cards1.pop();
        } else if (g == word2) {
            word2 = cards2.pop();
        } else {
            return "No"
        }
    }
    return "Yes";
}