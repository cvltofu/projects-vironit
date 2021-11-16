let arr = [1, 2, 3, 4, 5, 6, 7, 8]

function changeArray(arr) {
    let changedArray = []
    let even
    let right, left, centerIndex, centerNumber

    centerIndex = Math.floor(arr.length / 2)
    centerNumber = arr[centerIndex]

    if (arr.length % 2 === 0) even = true

    if (even) {
        right = arr.splice(centerIndex, centerIndex)
        left = arr.splice(0, centerIndex)
        changedArray = right.concat(left)
    } else {
        right = arr.splice(centerIndex + 1, centerIndex)
        right.push(centerNumber)
        left = arr.splice(0, centerIndex)
        changedArray = right.concat(left)
    }

    return changedArray
}

console.log(changeArray(arr))
