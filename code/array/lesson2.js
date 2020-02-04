export default arr => {
    let str = arr.sort().join('')
    let group = str.match(/(\d)\1+|\d/g)

    while(group.length > 1) {
        let a = group.shift().length
        let b = group.shift().length
        let v = gcd(a, b)
        if (v === 1) return false
        group.unshift('0'.repeat(v))
    }

    return group.length ? group[0].length > 1 : false
}

function gcd(a, b) {
    if (b === 0) {
        return a
    }
    return gcd(b, a % b)
}