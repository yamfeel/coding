const gcd = (a: number, b: number): number => {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
};

export default arr => {
    const str = arr.sort().join("")
    const group = str.match(/(\d)\1+|d/g)
    while (group.length > 1) {
        const a = group.shift()
        const b = group.shift()
        const m = gcd(a.length, b.length)
        if (m === 1) {
            return false
        } else {
            group.unshift("0".repeat(m))
        }
    }
    return group.length ? group[0].length > 1 : false
}