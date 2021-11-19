class MethodCounter {
    constructor() {}

    getCounter(number) {
        this.number = number
    }

    log() {
        console.log(this.number)
        return this
    }

    count(addNumber) {
        this.number += addNumber
        return this
    }

    reset() {
        this.number = 0
        return this
    }
}

let counter = new MethodCounter()

counter.getCounter(5)

counter.log().count(4).count(4).log().reset().log().count(8).log()
