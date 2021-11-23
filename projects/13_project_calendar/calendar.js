class Calendar {
    constructor(month, year, monthTitles, num) {
        this.month = month
        this.year = year
        this.monthTitles = monthTitles
        this.num = num
    }

    yearArrowPlus(num) {
        document
            .querySelector(
                `.calendar${num} thead tr:nth-child(1) td:nth-child(5)`
            )
            .addEventListener('click', () => {
                this.year++
                this.createCalendar()
            })
    }

    yearArrowMinus(num) {
        document
            .querySelector(
                `.calendar${num} thead tr:nth-child(1) td:nth-child(1)`
            )
            .addEventListener('click', () => {
                this.year--
                this.createCalendar()
            })
    }

    monthArrowPlus(num) {
        document
            .querySelector(
                `.calendar${num} thead tr:nth-child(1) td:nth-child(4)`
            )
            .addEventListener('click', () => {
                this.month++
                if (this.month > 11) {
                    this.month = 0
                    this.year++
                }
                this.createCalendar()
            })
    }

    monthArrowMinus(num) {
        document
            .querySelector(
                `.calendar${num} thead tr:nth-child(1) td:nth-child(2)`
            )
            .addEventListener('click', () => {
                this.month--
                if (this.month < 0) {
                    this.month = 11
                    this.year--
                }
                this.createCalendar()
            })
    }

    drawHead(num) {
        let headTable = `<table class="calendar${num}">
            <thead>
              <tr><td>‹‹<td>‹<td colspan="3"><td>›<td>››</tr>
              <tr><td>Пн<td>Вт<td>Ср<td>Чт<td>Пт<td>Сб<td>Вс</tr>
            <tbody>
        </table>`

        // document.querySelector('.input').innerHTML = headTable

        let newDiv = document.createElement('div')
        newDiv.innerHTML = headTable
        document.body.append(newDiv)
    }

    drawBody(month, year, table, num) {
        document.querySelector(
            `.calendar${num} thead td:nth-child(3)`
        ).innerHTML = monthTitles[month] + ' ' + year
        document.querySelector(`.calendar${num} tbody`).innerHTML = table
    }

    createCalendar() {
        let date = new Date(this.year, this.month)

        let table = '<tr>'

        fillBefore()
        fillWithDate(this.month)
        fillAfter()

        table += '</tr>'

        this.drawHead(this.num)
        this.drawBody(this.month, this.year, table, this.num)

        this.yearArrowPlus(this.num)
        this.yearArrowMinus(this.num)
        this.monthArrowPlus(this.num)
        this.monthArrowMinus(this.num)

        function getDay(date) {
            let day = date.getDay()
            if (day === 0) day = 7
            return day - 1
        }

        function fillBefore() {
            for (let i = 0; i < getDay(date); i++) table += '<td></td>'
        }

        function fillWithDate(month) {
            while (date.getMonth() === month) {
                if (
                    date.getDate() === new Date().getDate() &&
                    date.getMonth() === new Date().getMonth() &&
                    date.getFullYear() === new Date().getFullYear()
                )
                    table += '<td class="today">' + date.getDate()
                else table += '<td>' + date.getDate() + '</td>'

                if (getDay(date) === 6) table += '</tr><tr>'

                date.setDate(date.getDate() + 1)
            }
        }

        function fillAfter() {
            if (getDay(date) != 0)
                for (let i = getDay(date); i < 7; i++) table += '<td></td>'
        }
    }
}

let year = new Date().getFullYear(),
    monthTitles = [
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

let calendarFirst = new Calendar(
    new Date().getMonth(),
    new Date().getFullYear(),
    monthTitles,
    1
)
let calendarSecond = new Calendar(
    new Date().getMonth(),
    new Date().getFullYear() + 1,
    monthTitles,
    2
)

calendarFirst.createCalendar()
calendarSecond.createCalendar()
