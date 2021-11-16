function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = { name: 'A', age: 20, job: 'qwe' }
const person2 = { name: 'B', age: 30, job: 'asd' }

function bind(person, log) {
    return function (...args) {
        log.apply(person, args)
    }
}

bind(person1, logPerson)()
bind(person2, logPerson)()
