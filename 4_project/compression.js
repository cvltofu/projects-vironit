let string = 'aabbccceee'
let letters = string.split('')
let counterSameLetters = 1
let counterDiffLetters = 0
let arrOfDiffLetters = []
let numberOfSameLetters = []
let compressedString = []
let uncompressedString = []

compress()
uncumpress()

function compress() {
    countQuantityOfLettersAndTheirNumber()

    function countQuantityOfLettersAndTheirNumber() {
        for (let i = 0; i < letters.length; i++)
            if (letters[i] == letters[i + 1]) {
                counterSameLetters++
            } else {
                counterDiffLetters++

                arrOfDiffLetters.push(letters[i])
                numberOfSameLetters.push(counterSameLetters)
                counterSameLetters = 1
            }
    }

    for (let i = 0; i < numberOfSameLetters.length; i++)
        compressedString.push(arrOfDiffLetters[i], numberOfSameLetters[i])

    compressedString = compressedString.join('')
    console.log(compressedString)
}

function uncumpress() {
    for (let i = 0; i < numberOfSameLetters.length; i++)
        for (let j = 0; j < numberOfSameLetters[i]; j++)
            uncompressedString.push(arrOfDiffLetters[i])

    uncompressedString = uncompressedString.join('')
    console.log(uncompressedString)
}
