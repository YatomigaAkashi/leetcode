export default str => {
    // 存储结果
    let r = []
    // 遍历
    for (let i = 0; i < str.length - 1; i++) {
        let result = match(str.slice(i))
        if (result) {
            r.push(result)
        }
    }
    return r.length
}

// 正则匹配
function match(str) {
    let j = str.match(/^(0+|1+)/)[0]
    let o = (j[0] ^ 1).toString().repeat(j.length)
    let reg = new RegExp(`^(${j}${o})`)
    if (reg.test(str)) {
        return j + o
    }
    return ''
}
