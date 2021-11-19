let str = 'Каждый охотник желает знать, где сидит фазан.'

let arr = str.split('')

let res = arr.filter((elem, i) => {
    return arr[i - 1] == ' ' || i == 0
})

console.log(res)
