class Calendar {
    static table =
        '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>'

    constructor(month, year, date) {
        this.month = month
        this.year = year
        this.date = date
    }

    setDate(month, year, date) {
        this.month = month
        this.year = year
        this.date = date
    }

    fillBefore() {}

    fillAfter() {}

    createCalendar() {}
}

let month = prompt('Введите номер месяца: ') - 1
let year = prompt('Введите год: ')
let date = new Date(year, month)

const calendar = new Calendar(month, year, date)
