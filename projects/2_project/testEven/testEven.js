let num = prompt('Введите число: ')
let digits = num.split('').map(Number)

for (let i = 0; i < digits.length; i++) {
    if (digits[i - 1] % 2 === 0 && digits[i] % 2 === 0) {
        digits.splice(i, 0, '-')
    }
}

console.log(digits.join(''))
