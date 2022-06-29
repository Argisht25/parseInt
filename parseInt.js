//check whether a given integer has an increasing digits sequence.
function test(pars) {
    let num = ('' + pars).split('')
    for (let i = 0; i < num.length; i++) {
        if (parseInt(num[i]) >= parseInt(num[i + 1])) {
            return false
        }
    }
    return true
}
