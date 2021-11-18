let table =
    '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>'
let month, year, date

function setDate() {
    month = prompt('Введите номер месяца: ') - 1
    year = prompt('Введите год: ')
    date = new Date(year, month)
}

function getDay(date) {
    day = date.getDay()
    if (day === 0) day = 7
    return day - 1
}

function createCalendar() {
    ;(function () {
        fillBefore()
        fillWithDate()
        fillAfter()
    })()

    table += '</tr></table>'

    return table

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

setDate()

document.querySelector('div').innerHTML = createCalendar()
