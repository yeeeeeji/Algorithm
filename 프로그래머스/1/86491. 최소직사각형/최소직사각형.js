function solution(sizes) {
    var [W, H] = [0, 0];
    sizes.forEach((size) => {size.sort((a, b) => a-b)});
    sizes.forEach(([w, h]) => {
        W = W < w ? w : W;
        H = H < h ? h : H;
    })
    return W*H;
}