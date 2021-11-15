console.log(one(plus(two())))

let plus = (number1) => {
    return (number2) => number1 + number2
}
let minus = (number1) => {
    return (number2) => number1 - number2
}
let mult = (number1) => {
    return (number2) => number1 * number2
}
let divide = (number1) => {
    return (number2) => number2 / number1
}

let one = (callback) => {
    return callback ? callback(1) : 1
}
let two = (callback) => {
    return callback ? callback(2) : 2
}
let three = (callback) => {
    return callback ? callback(3) : 3
}
let four = (callback) => {
    return callback ? callback(4) : 4
}
let five = (callback) => {
    return callback ? callback(5) : 5
}
let six = (callback) => {
    return callback ? callback(6) : 6
}
let seven = (callback) => {
    return callback ? callback(7) : 7
}
let eight = (callback) => {
    return callback ? callback(8) : 8
}
let nine = (callback) => {
    return callback ? callback(9) : 9
}
