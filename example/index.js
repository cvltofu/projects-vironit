let D1 = new Date(),
    D1last = new Date(D1.getFullYear(), D1.getMonth() + 1, 0).getDate(), // последний день месяца
    D1Nlast = new Date(D1.getFullYear(), D1.getMonth(), D1last).getDay(), // день недели последнего дня месяца
    D1Nfirst = new Date(D1.getFullYear(), D1.getMonth(), 1).getDay(), // день недели первого дня месяца
    calendar1 = '<tr>',
    month = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
    ] // название месяца, вместо цифр 0-11

document.querySelector('#calendar1 tbody').innerHTML = calendar1
document.querySelector('#calendar1 thead td:last-child').innerHTML =
    D1.getFullYear()
document.querySelector('#calendar1 thead td:first-child').innerHTML =
    month[D1.getMonth()]
