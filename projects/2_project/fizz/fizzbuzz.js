for (let i = 1; i < 100; i++) {
    for (let j = 0; !j && !(i % 3); j++) console.log('fizz')
    for (let j = 0; !j && !(i % 5); j++) console.log('buzz')
    for (let j = 0; !j && i % 3 && i % 5; j++) console.log(i)
}
