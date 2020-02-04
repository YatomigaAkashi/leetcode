export default n => {
    return make(n)
}

function make(n) {
    if (n === 1) return ['0', '1']
    let arr = make(n - 1)
    let result = []
    let max = Math.pow(2, n) - 1
    for (let i = 0; i < arr.length; i++) {
        result[i] = `0${arr[i]}`
        result[max - i] = `1${arr[i]}`
    }
    return result
}