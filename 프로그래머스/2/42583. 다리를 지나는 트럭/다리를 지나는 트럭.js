function solution(bridge_length, weight, truck_weights) {
    if (truck_weights.length == 1) return bridge_length+1;
    
    var W = 0;
    var time = 1;
    var bridge = [];
    
    for (var i = 0; i < truck_weights.length; i++) {
        var truck = truck_weights[i];
        if (W+truck <= weight && bridge.length < bridge_length) {
            W += truck;
            bridge.push([truck, time]);
            time += 1;
        } else {
            var [TR, T] = bridge.shift();
            W -= TR;
            time = Math.max(time, T+bridge_length);
            i -= 1;
        }
    }
    
    return bridge.pop()[1]+bridge_length;
}