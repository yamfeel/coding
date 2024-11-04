/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
/**
 * 判断是否可以在不违反规则的情况下在花坛中种植给定数量的花。
 * 
 * @param {number[]} flowerbed - 一个表示花坛的数组，0 表示空地，1 表示已经种植的花。
 * @param {number} n - 需要种植的花的数量。
 * @returns {boolean} 如果可以种植给定数量的花则返回 true，否则返回 false。
 */
var canPlaceFlowers = function (flowerbed, n) {
    flowerbed.unshift(0)
    flowerbed.push(0)
    let max = 0
    for(let i = 0, f = flowerbed, l = f.length; i < l; i++) {
        if (f[i-1] === 0 && f[i] === 0 && f[i+1] === 0 ) {
            f[i] = 1
            max++
        }
    }
    return n <= max
};