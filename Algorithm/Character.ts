/**
 * 1. 给定一个字符串，你需要反转字符串中的每一个单词的字符顺序，同时仍然保留空格和单词的初始顺序。
 */
function reverseCharacter(str: string) {
	// let arr = str.split(' ')
	// let arr = str.split(/\s/g)
	let arr = str.match(/[\w']+/g)
	let result = arr!.map(item => {
		return item.split('').reverse().join('')
	})
	return result.join(' ')
}
// split, match, map, reverse, join
console.log(reverseCharacter('i love you.'))




/**
 * 2. 计数二进制子串，计算相同数量 0和1 非空(连续)子字符串的数量，并且这些子字符串中的所有0和所有1都是组合在一起的。
 * 请计算子串重复出现次数
 * 示例：in 00110011; out 6 解释： "0011,01,1100,10,0011,01"
 * 解题思维图谱↓
 * - *0011*0011 -
 * - 0*01*10011 -
 * - 00*1100*11 -
 * - 001*10*011 -
 * - 0011*0011* -
 * - 00110*01*1 -
 */

function calculatingSubclass(str) {
	// ^ 01奇偶取反， repeat 重复元素, slice 切割[)
	const r: any[] = []
	const match = (str) => {
		let j = str.match(/^(0+|1+)/)![0]
		let o = (Number(j[0]) ^ 1).toString().repeat(j.length)
		let reg = new RegExp(`^(${j}${o})`)
		if (reg.test(str)) {
			return str.replace(reg, '$1')
		} else {
			return ''
		}
	}
	for (let i = 0, len = str.length - 1; i < len; i++) {
		let sub: string = match(str.slice(i))
		sub && r.push(sub)
	}
	return r
}

console.log(calculatingSubclass('10101'))
console.log(calculatingSubclass('10101').length)