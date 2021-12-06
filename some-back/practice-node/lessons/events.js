const Emitter = require('events')

const emitter = new Emitter()

emitter.on('message', (data, second, third) => {
    console.log('Сообщение ' + data)
    console.log('Второй аргумент ' + second)
})

emitter.emit('message')

// const MESSAGE = process.env.message || ''

// if (MESSAGE) {
//     emitter.emit('message', MESSAGE, 123)
// } else {
//     emitter.emit('messgae', 'Вы не указали сообщение')
// }
