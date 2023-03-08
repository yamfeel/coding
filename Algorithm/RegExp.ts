let exp, result

// 零宽断言，负向：(?<!)exp(?!)；正向：(?=!)exp(?=)
exp = `<span>你好!</span>`
result = exp.match(/(?<=<span>)(\W|\d)+(?=<\/span>)/g)
console.log(result)
/* log: ['你好'] */