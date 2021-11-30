const fs = require('fs')
const path = require('path')

//СЧИТЫВАНИЕ ФАЙЛА ЦЕЛИКОМ
// fs.readFile(path.resolve(__dirname, 'test.txt'), (err, data) => {
//     if (err) {
//         throw err
//     }
//     console.log(data)
// })

// const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'))

//ОДИН ЧАНК (ИЛИ ЭЛЕМЕНТ) ПО ДЕФОЛТУ 64КБ
// stream.on('data', (chunk) => {
//     console.log(chunk)
// })
// stream.on('end', () => {
//     console.log('Закончили чтение')
// })
// stream.on('open', () => {
//     console.log('Начали чтение')
// })
// stream.on('error', (e) => {
//     console.log(e)
// })

// const writableStream = fs.createWriteStream(path.resolve(__dirname, 'test.txt'))
// for (let i = 0; i < 20; i++) {
//     writableStream.write(i + '\n')
// }

// writableStream.end()

const http = require('http')

http.createServer((req, res) => {
    //req - readable stream
    //res - writable stream
    const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'))

    //Стрим закончит читать раньше, чем пользователь скачает
    // stream.on('data', (chunk) => res.write(chunk))
    // stream.on('end', (chunk) => res.end())

    stream.pipe(res)
})
