export default (arr, n) => {
    let max = 0
    // 默认右侧边界右侧没有植物
    arr.push(0)
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === 0) {
            if (i === 0 && arr[i + 1] === 0) {
                max++
                i++
            } else if (arr[i - 1] === 0 && arr[i + 1] === 0) {
                max++
                i++
            }
        }
    }
    return n <= max
}