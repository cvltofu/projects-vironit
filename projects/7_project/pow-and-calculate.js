function pow(x) {
    return function (y) {
        if (y === 1) return x
        else return x * pow(x)(y - 1)
    }
}

function calculate(a) {
    return function (sign) {
        return function (b) {
            switch (sign) {
                case '+':
                    return a + b
                    break
                case '-':
                    return a - b
                    break
                case '*':
                    return a * b
                    break
                case '/':
                    return a / b
                    break
            }
        }
    }
}

console.log(calculate(1)('-')(2))

console.log(pow(-2)(3))
