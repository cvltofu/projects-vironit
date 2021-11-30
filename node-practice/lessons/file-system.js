const fs = require('fs')
const path = require('path')

//СИНХРОННОЕ СОЗДАНИЕ ПАПКИ С РЕКУРСИЕЙ, ТО БИШЬ СО ВЛОЖЕННОСТЬЮ
// fs.mkdirSync(path.resolve(__dirname, 'dir', 'dir1', 'dir2'), {
//     recursive: true,
// })

//АСИНХРОННОЕ СОЗДАНИЕ ПАПКИ БЕЗ РЕКУРСИИ, ТО БИШЬ БЕЗ ВЛОЖЕННОСТИ
// console.log('START')

// fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
//     if (err) {
//         console.log(err)
//         return
//     }

//     console.log('Папка создана')
// })

// console.log('END')

//УДАЛЕНИЕ ПАПКИ
// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
//     if (err) {
//         throw err
//     }
// })

//СОЗДАНИЕ ФАЙЛА И ЗАПИСЬ В НЕГО (С ЗАМЕНОЙ)
// fs.writeFile(path.resolve(__dirname, 'test.txt'), 'qwd qqw ', (err) => {
//     if (err) {
//         throw err
//     }

//     console.log('Файл записан')

//     fs.appendFile(path.resolve(__dirname, 'test.txt'), '1212 qsd', (err) => {
//         if (err) {
//             throw err
//         }
//     })
// })

//ПРОМИСЫ
const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) =>
        fs.writeFile(path, data, (err) => {
            if (err) {
                return reject(err.message)
            }
            resolve()
        })
    )
}

const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) =>
        fs.appendFile(path, data, (err) => {
            if (err) {
                return reject(err.message)
            }
            resolve()
        })
    )
}

const readFileAsync = async (path) => {
    return new Promise((resolve, reject) =>
        fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
            if (err) {
                return reject(err.message)
            }
            resolve(data)
        })
    )
}

const removeFileAsync = async (path) => {
    return new Promise((resolve, reject) =>
        fs.rm(path, (err) => {
            if (err) {
                return reject(err.message)
            }
            resolve()
        })
    )
}

// writeFileAsync(path.resolve(__dirname, 'test.txt'), 'written first || ')
//     .then(() =>
//         appendFileAsync(path.resolve(__dirname, 'test.txt'), 'appended data')
//     )
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '26346'))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), ' 000'))
//     .then(() => readFileAsync(path.resolve(__dirname, 'test.txt')))
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))

// removeFileAsync(path.resolve(__dirname, 'test.txt')).then(() =>
//     console.log('Файл удален')
// )

// const text = process.env.TEXT || ''

// writeFileAsync(path.resolve(__dirname, 'text.txt'), text)
//     .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
//     .then((data) => data.split(' ').length)
//     .then((count) =>
//         writeFileAsync(
//             path.resolve(__dirname, 'count.txt'),
//             `Кол-во слов ${count}`
//         )
//     )
