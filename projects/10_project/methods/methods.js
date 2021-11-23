let numbers = [2, 3, 5, 7, 11, 13, 17]

function currentSums(numbers) {
    let result = []

    numbers.reduce((sum, current, i) => {
        return (result[i] = sum + current)
    }, 0)

    console.log(result)
}

currentSums(numbers)
