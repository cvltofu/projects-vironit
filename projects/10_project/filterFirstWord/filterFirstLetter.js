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

let arr = str.split('')

let res = arr.filter((elem, i) => {
    return arr[i - 1] == ' ' || i == 0
})

console.log(res)
