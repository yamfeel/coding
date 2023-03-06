// 1. 电话号码的组合
/**
 * 给点一个仅包含数字 2-9 的字符串，返回所有它能表达的字母组合。
 * 
 * 给出数字到字母的映射如下：
 * 1-&&&, 2-abc, 3-def
 * 4-ghi, 5-jkl, 6-mon
 * 7-pqrs, 8-tuv, 9-wxyz
 * 
 * in: 2
 * 
 * out: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf" ]
 */

function letterCombinations(digits) {
	const map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mon', 'pqrs', 'tuv', 'wxyz']
	const num = digits.split('')
	const code: any[] = []
	num.forEach(item => {
		if (map[item]) {
			code.push(map[item])
		}
	})

	const comb = arr => {
		const tmp: string[] = []
		for (let i = 0, il = arr[0].length; i < il; i++) {
			for (let j = 0, jl = arr[1].length; j < jl; j++) {
				tmp.push(`${arr[0][i]}${arr[1][j]}`)
			}
		}
		arr.splice(0, 2, tmp)
		if (arr.length > 1) {
			comb(arr)
		} else {
			return tmp
		}

		return arr[0]
	}
	return comb(code)
}

console.log(letterCombinations('234').length)