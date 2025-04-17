function solution(cacheSize, cities) {
    if (!cacheSize) return cities.length*5;
    
    var C = [];
    var A = 0;
    cities = cities.map((c) => c.toUpperCase())
    
    for (c of cities) {
        
        if (C.includes(c)) {
            C = C.filter((w) => w != c);
            A += 1;
        } else {
            A += 5;
        }
        
        if (C.length >= cacheSize) C.shift();
        C.push(c);
        
    }
    
    return A;
}