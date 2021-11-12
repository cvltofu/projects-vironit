const name = prompt('Введите ваше имя: ')
const surname = prompt('Введите фамилию: ')
const patronymic = prompt('Введите отчество: ')
const age = prompt('Введите возраст: ')
const gender = confirm('Ваш пол - мужской?')
let ageInDays = age * 361

alert(
    `Ваше ФИО: ${surname} ${name} ${patronymic}
    Ваш возраст в годах: ${age}
    Ваш возраст в днях: ${ageInDays}
    ${checkLegalAge()}
    Ваш пол: ${checkGender()}
    Вы на пенсии: ${checkOnPension()}`
)

function checkOnPension() {
    if (age >= 60) return 'да'
    else return 'нет'
}

function checkLegalAge() {
    if (age < 18 && age > 0) return 'Вы несовершеннолетний'
    else if (age >= 18 && age < 100) return 'Вы совершеннолетний'
}

function checkGender() {
    if (gender) return 'мужской'
    else return 'женский'
}
