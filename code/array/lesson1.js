const tel = ['', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']

function comb(arr) {
    let temp = []
    for (let i = 0; i < arr[0].length; i++) {
        for (let j = 0; j < arr[1].length; j++) {
            temp.push(`${arr[0][i]}${arr[1][j]}`)
        }
    }
    arr.splice(0, 2, temp)
    if (arr.length > 1) {
        comb(arr)
    }
    return arr[0]
}

export default str => {
    let code = str.split('')
    code.forEach((val, index) => {
        code[index] = tel[val * 1]
    })
    return comb(code)
}
