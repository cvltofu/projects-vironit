string = 'Аа ннн .ё'

countVowelLetters(string)

function countVowelLetters(string) {
    let counter = 0

    let stringArr = string.toLowerCase()

    for (let i = 0; i < string.length; i++)
        if (
            stringArr[i] == 'а' ||
            stringArr[i] == 'е' ||
            stringArr[i] == 'и' ||
            stringArr[i] == 'о' ||
            stringArr[i] == 'у' ||
            stringArr[i] == 'ы' ||
            stringArr[i] == 'э' ||
            stringArr[i] == 'ю' ||
            stringArr[i] == 'я' ||
            stringArr[i] == 'ё'
        )
            counter++

    console.log(counter)
}
