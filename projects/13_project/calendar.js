let month = new Date().getMonth(),
    year = new Date().getFullYear(),
    date

const monthTitles = [
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
]

function getDay(date) {
    day = date.getDay()
    if (day === 0) day = 7
    return day - 1
}

function createCalendar() {
    date = new Date(year, month)
    let table = '<tr>'
    ;(function () {
        fillBefore()
        fillWithDate()
        fillAfter()
    })()
    table += '</tr>'

    document.querySelector('#calendar thead td:nth-child(2)').innerHTML =
        monthTitles[month] + ' ' + year
    document.querySelector('#calendar tbody').innerHTML = table

    function fillBefore() {
        for (let i = 0; i < getDay(date); i++) {
            table += '<td></td>'
        }
    }

    function fillWithDate() {
        while (date.getMonth() === month) {
            table += '<td>' + date.getDate() + '</td>'

            if (getDay(date) === 6) {
                table += '</tr><tr>'
            }

            date.setDate(date.getDate() + 1)

            if (date.getDate() === new Date().getDate()) {
                table += '<td class="today">'
                continue
            }
        }
    }

    function fillAfter() {
        if (getDay(date) != 0) {
            for (let i = getDay(date); i < 7; i++) {
                table += '<td></td>'
            }
        }
    }
}

createCalendar()

document.querySelector(
    '#calendar thead tr:nth-child(1) td:nth-child(1)'
).onclick = function () {
    month--
    if (month < 0) {
        month = 11
        year--
    }
    createCalendar()
}

document.querySelector(
    '#calendar thead tr:nth-child(1) td:nth-child(3)'
).onclick = function () {
    month++
    if (month > 11) {
        month = 0
        year++
    }
    createCalendar()
}
