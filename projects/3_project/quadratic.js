let sum = (a, b, c) => {
    let D = b ** 2 - 4 * a * c

    let x1 = 0,
        x2 = 0

    let signA = '',
        signB = '',
        signC = ''

    if (a < 0) signA = '-'
    if (b < 0) signB = '-'
    else signB = '+'
    if (c < 0) signC = '-'
    else signC = '+'

    if (D < 0)
        return `Уравнение ${signA}${Math.abs(a)}x^2 ${signB} ${Math.abs(
            b
        )}x ${signC} ${Math.abs(c)} не имеет вещественных корней`
    else if (D === 0)
        return `Уравнение ${signA}${Math.abs(a)}x^2 ${signB} ${Math.abs(
            b
        )}x ${signC} ${Math.abs(c)} имеет один корень x = ${(x1 = -(
            b /
            (2 * a)
        ))}`
    else if (D > 0) {
        return `Уравнение ${signA}${Math.abs(a)}x^2 ${signB} ${Math.abs(
            b
        )}x ${signC} ${Math.abs(c)} имеет корни x1 = ${(x1 =
            (-b + Math.sqrt(D)) / (2 * a))} и x2 = ${(x2 =
            (-b - Math.sqrt(D)) / (2 * a))}`
    }
}

let a = -1,
    b = -8,
    c = 72

console.log(sum(a, b, c))
