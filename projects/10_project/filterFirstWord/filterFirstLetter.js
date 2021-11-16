// let string = 'Каждый охотник желает знать, где сидит фазан.'

// function filterFirstLetter(string) {
//     let words = string.split('')

//     let firstLetters = [string[0]]

//     for (let i = 1; i < words.length; i++) {
//         if (words[i] === ' ') firstLetters.push(words[i + 1])
//     }

//     return firstLetters
// }

let str = 'Каждый охотник желает знать, где сидит фазан.'

function firstChar(value, index, arr) {
    if (index == 0) return true
    else return arr[index - 1] === ' '
}

let array = [].filter.call(str, firstChar)

console.log(array)
