string = 'Аоооа ннн .ё'

countVowelLetters(string)

function countVowelLetters(str) {
    let arr_vowel_list = 'аеиоуыэюяё'.split('')

    let count = 0

    str.toLowerCase()
        .split('')
        .forEach((letter) => {
            if (arr_vowel_list.indexOf(letter) !== -1) {
                count++
            }
        })

    console.log(count)
}
