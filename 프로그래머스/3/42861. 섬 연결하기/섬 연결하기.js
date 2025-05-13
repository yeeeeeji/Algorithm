function solution(n, costs) {
    var answer = 0;
    var parent = new Array(n).fill(null).map((a, i) => i);
    costs.sort((a, b) => a[2]-b[2]);
    
    for (cost of costs) {
        // 두 다리의 부모가 같다는 것 == 이미 연결되어 있다는 것
        // 다르다는 것 == 연결되어 있지 않다는 것
        var [p1, p2] = [getParent(cost[0], parent), getParent(cost[1], parent)]
        if (!(p1 == p2)) {
            answer += cost[2];  // 다리를 연결했으므로 비용 추가
            // 부모를 연결함으로써 다리 연결
            unionParent(p1, p2, parent);
        }
    }
    
    return answer;
}

function getParent(x, parent) {
    if (parent[x] === x) return x;  // x의 부모가 자기자신이면 최상위 노드는 x
    return (parent[x] = getParent(parent[x], parent));
}

function unionParent(x, y, parent) {
    return x < y ? parent[y] = x : parent[x] = y
}