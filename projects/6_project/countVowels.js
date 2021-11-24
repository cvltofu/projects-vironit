const string = 'Аоооа ннн .ё'

countVowelLetters(string)

function countVowelLetters(str) {
    let vowels = 'аеиоуыэюяё'.split('')

    let count = 0

    str.toLowerCase()
        .split('')
        .forEach((letter) => {
            if (vowels.indexOf(letter) !== -1) {
                count++
            }
        })

    console.log(count)
}
