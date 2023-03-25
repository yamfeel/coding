let hasGroupsSizeX = function (deck) {
    let map = new Map()
    for (let n of deck) { //统计频次
        map.set(n, map.has(n) ? map.get(n) + 1 : 1)
    }
    let arr = [...map.values()]
    let res = arr[0]
    // every() 方法测试数组的所有元素是否都通过了指定函数的测试。
    return arr.every(i => (res = gcd(res, i)) > 1) //求最大公约数是否大于1

};
//辗转相除法 4,2
let gcd = (a, b) => (b === 0 ? a : gcd(b, a % b))