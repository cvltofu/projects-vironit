function getCounter(number) {
    function log() {}

    function count(plusNumber) {
        return number + plusNumber
    }

    function reset() {
        return (number = 0)
    }
}

let counter = getCounter(5)

counter.log()
